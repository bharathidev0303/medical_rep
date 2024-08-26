import { CustomHeader, IconButton, Img } from "@MR/components";
import DropdownComponent from "@MR/components/dropdown";
import { colors, fontConfig } from "@MR/shared";
import useStore from "@MR/utils/store";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Path, Svg } from "react-native-svg";

interface props {
    files: any,
    setFiles: (e: any) => void,
    onPress?: () => void,
    selectedDis: (e: any) => void,
    confirmorder?: Boolean,
    error: any
}

export const UploadfileScreen: React.FC<props> = ({
    files, setFiles, onPress, selectedDis, confirmorder, error
}) => {
    const [distributor, setDistributor] = useState([
        { label: 'Rajlaxmi Pharma distributors', value: '1' },
        { label: 'Laxmi Distributors 24/7', value: '2' },
        { label: 'Abhishek pharma agency', value: '3' },
        { label: 'Nitin agency', value: '4' },
        { label: 'Pharm retail care', value: '5' },
        { label: 'Suyash helpline', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ]);
    const { customers } = useStore();

    useEffect(() => {
        if (customers && customers.length != 0) {
            let list: any = [];
            customers.forEach((val: any) => {
                list.push({
                    label: val.name,
                    value: val.inviteId,
                })
            })
            setDistributor(list);
        }
    }, [])


    const handleSelect = (option: any, index: any) => {
        console.log('Selected:', option, index);
        let find: any = files;
        if (find && find[index]) {
            find[index].distributor = option;
        }
        selectedDis(find)

    };
    const deleteFile = (index: any) => {
        let file: any = files;
        file.splice(index, 1)
        setFiles(file);
    }

    return (
        <View style={[confirmorder ? { paddingBottom: 270, } : { paddingBottom: 206 }, { height: '100%', backgroundColor: 'white', width: '100%' }]}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 0, width: '100%', marginTop: 5, marginBottom: 5 }}>
                <Text style={{ ...fontConfig.GilroyMedium, fontSize: 20 }}>Uploaded files</Text>
                <IconButton onPress={onPress} textStyle={{ color: 'rgba(20, 57, 187, 1)', fontSize: 14 }} text="+Add More" />
            </View>
            <View>
                <ScrollView key={'upload'}>
                    {error != null && error != '' ?
                        <View style={styles.errorMessage}>
                            <Text style={styles.errorMessageText}>{error}</Text>
                        </View> : ''
                    }
                    {files.map((file: any, i: any) => (
                        <View key={i} style={{ ...styles.selectFile }}>
                            <View style={styles.removeFile}>
                                <Text ellipsizeMode="tail" numberOfLines={1} style={{ maxWidth: '80%', color: 'rgba(20, 57, 187, 1)', fontSize: 14 }}>{file?.file.name.toString()}</Text>
                                <TouchableOpacity onPress={() => deleteFile(i)}>
                                    <Img style={{ width: 22, height: 22 }} source={require("@Asset/images/delete.png")} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ zIndex: 10, width: '100%' }}>
                                <DropdownComponent
                                    selectedvalue={file.distributor}
                                    options={distributor}
                                    onSelect={(e: any) => handleSelect(e, i)}
                                    placeholder="Search distributor"
                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.active.color,
        height: 170,
        paddingTop: 50,
    },
    selectFile: {
        borderWidth: 1,
        borderColor: 'rgba(245, 245, 245, 1)',
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        borderRadius: 5,
        height: 126,

    },
    removeFile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    errorMessage: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    errorMessageText: {
        backgroundColor: '#fef8f6',
        color: 'rgba(238, 69, 38, 1)',
        padding: 10,
        borderRadius: 5
    }
});
