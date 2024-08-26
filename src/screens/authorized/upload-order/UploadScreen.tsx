import { Button, CustomHeader, IconButton, Img, Popup } from "@MR/components"
import { colors, fontConfig } from "@MR/shared"
import { StyleSheet, View, Text, ScrollView, Platform } from "react-native"
import * as DocumentPicker from 'expo-document-picker';
import { useEffect, useState } from "react";
import Loader from "@MR/components/Loader";
import { UploadfileScreen } from "./UploadfileScreen";
import CustomDropdown from "@MR/components/dropdown";
import { useApi } from "@MR/apiservice";
export const UploadScreen = (): JSX.Element => {
    const { fetchData, updateData, deleteData, sendData } = useApi();

    const ALLOWED_TYPES = {
        PDF: 'application/pdf',
        XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        XLS: 'application/vnd.ms-excel',
        TXT: 'text/plain',
        CSV: 'text/csv'
    };
    const pickDocument = async () => {
        let result: any = await DocumentPicker.getDocumentAsync({
            type: Object.values(ALLOWED_TYPES),
            copyToCacheDirectory: false,
            multiple: true,
        });
        if (result.canceled === false) {
            if (result.assets.length > 10) { // Enforce max count of 10 documents
                return;
            }
            let selecteFile: any = []
            result.assets.forEach((file: any) => {
                selecteFile.push({
                    file: file,
                    distributor: null
                })
            })
            setFile([...files, ...selecteFile]);
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        } else {

        }
        checkConfirm();

    };
    const successmessgae = () => {
        return (
            <View style={styles.successMessage}>
                <Img style={{ width: 45, height: 45 }} source={require('@Asset/images/successIcon.png')} />
                <Text style={styles.popupTitle}>Upload Order Submitted</Text>
                <Text style={styles.popupsubTitle}>Lorem ipsum doller amet</Text>
            </View>
        )
    }

    const [files, setFile]: any[] = useState([]);
    const [loading, setLoading] = useState(false);
    const [confirmorder, setConfirmorder] = useState(false);
    const [error, setError]: any = useState('');
    const [showPopup, setShowPopup]: any = useState(false);
    const [popupMessage, setPopupMessage]: any = useState(successmessgae())

    const setFiles = (file: any) => {
        setLoading(true)
        setFile(file)
        setTimeout(() => {
            setLoading(false)
        })
        checkConfirm();
    }
    const selectedDis = (file: any) => {
        setFile(file)
        checkConfirm();
    }

    const checkConfirm = () => {
        let check = files.filter((item: any) => item.distributor != null);
        if (check && check.length != 0) {
            setConfirmorder(true);
        }
        else {
            setConfirmorder(false);
        }
        setError('')
    }
    const clickconfirmOrder = async () => {

        const formData = new FormData();
        files.forEach((fileObj: any, index: any) => {
            const file: any = {
                name: fileObj.file?.name,
                type: fileObj.file?.mimeType,
                uri: Platform.OS === 'android' ? fileObj.file.uri : fileObj.file.uri.replace('file://', ''),
            };
            formData.append(`files[${index}]`, file);
            formData.append(`customers[${index}]`, fileObj.distributor);

        });
        try {
            let res = await sendData({ endpoint: '/mr/orders/upload', data: formData, header: { 'Content-Type': 'multipart/form-data' } })
            if (res) {
                console.log(res, 23423423)
            }
        }
        catch (e) {
            console.log(e, 234234)
        }
        setError(
            findError('large', 'Orderfilename1.pdf')
        )
        setPopupMessage(successmessgae());
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setShowPopup(true);
            setFile([])
        }, 2000)
    }

    const findError = (error: any, file?: any) => {
        switch (error) {
            case 'large':
                return (
                    <Text>
                        Upload error! <Text style={{ fontWeight: 'bold' }}>{file}</Text> file size exceeded.
                        Max size limit 10mb
                    </Text>
                )
            case 'selectdis':
                return (
                    <Text>
                        Plz select All Fill Distributor
                    </Text>
                )
            default:
                return '';
        }
    }




    return (
        <View style={{ backgroundColor: 'white', width: '100%', overflow: 'scroll' }}>
            <View>
                <View style={styles.header}>
                    <CustomHeader title='Upload' titleColor='black' iconColor='black' />
                </View>
            </View>
            {!loading ?
                (files && files?.length == 0 ?
                    <View style={styles.browse_file}>
                        <Img style={{ width: 45, height: 59 }} source={require("@Asset/images/browse-file.png")} />
                        <Text style={styles.fileTile}>Click below to Upload order file</Text>
                        <Text style={styles.fileDescription}>*Files with .csv, .pdf extensions are allowed with Max 10MB file size</Text>
                        <IconButton onPress={pickDocument} icon={require('@Asset/images/browse.png')} textStyle={{ color: ' rgba(20, 57, 187, 1)', ...fontConfig.GilroyMedium, fontSize: 18 }} style={{ backgroundColor: 'white', borderWidth: 1.5, borderColor: 'rgba(20, 57, 187, 1)' }} text="Browse File" />
                    </View> :
                    <View style={styles.selectedFiled}>
                        <View >
                            <UploadfileScreen error={error} confirmorder={confirmorder} key='uploadorder' selectedDis={selectedDis} files={files} setFiles={setFiles} onPress={pickDocument} />
                        </View>
                        {confirmorder ?
                            <View style={styles.placeOrder}>
                                <Button onPress={clickconfirmOrder} text="Confirm Order" />

                            </View> : ''
                        }
                    </View>
                ) :
                (
                    <View style={styles.browse_file}>
                        <Loader />
                    </View>
                )
            }
            <Popup closePopup={setShowPopup} focusToclose={false} showPopup={showPopup} content={popupMessage} />

        </View>
    )
}




const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingTop: 10
    },
    browse_file: {
        height: '100%',
        maxWidth: '80%',
        width: 300,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        top: 0,
        paddingBottom: 100,
        alignItems: 'center',
    },
    fileTile: {
        fontSize: 20,
        ...fontConfig.GilroyMedium,
        color: 'rgba(134, 134, 134, 1)',
        paddingTop: 15
    },
    fileDescription: {
        ...fontConfig.GilroyRegular,
        fontSize: 14,
        color: 'rgba(136, 136, 136, 1)',
        textAlign: 'center',
        paddingTop: 15,
        marginBottom: 15
    },
    selectedFiled: {
        height: '100%',
        position: 'relative',


    },
    placeOrder: {
        position: 'absolute',
        bottom: 135,
        width: '100%',
        zIndex: 100,
        paddingLeft: 20,
        padding: 10,
        paddingRight: 20
    },
    successMessage: {
        padding: 10,
        paddingTop: 25,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    popupTitle: {
        color: 'rgba(3, 3, 3, 1)',
        fontSize: 20,
        ...fontConfig.GilroyBold,
        textAlign: 'center',
        marginTop: 18
    },
    popupsubTitle: {
        color: 'rgba(145, 147, 161, 1)',
        fontSize: 14,
        ...fontConfig.GilroyMedium,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    }

})