import { Button, CustomHeader, IconButton, Img, Popup } from "@MR/components"
import { DaterangePicker } from "@MR/components/data-range-calendar"
import { colors, fontConfig } from "@MR/shared"
import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { Circle, Svg } from "react-native-svg"

export const OrderHistoryScreen = (): JSX.Element => {
    const onPress = () => {

    }
    const onDateRangeSelected = (e: any) => {
        console.log(e, 4324)
    }
    const [orderHistory, setOrderHistory] = useState([
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
        {
            fileName: 'Orderfilename2.csv',
            distributorName: 'Mahalaxmi Distributors',
            date: '24/07/2024',
            fileSize: '8MB'
        },
    ]);
    const successmessgae = () => {
        return (
            <View style={styles.successMessage}>
                <Text style={styles.popupTitle}>Are you sure you want to delete this order?</Text>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 15, marginTop: 60, paddingBottom: 0 }}>
                    <Button  onPress={()=>closePopup(false)} padding={{ padding: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5 }} text="Close" />
                    <Button onPress={() => confirmDelet()} padding={{ padding: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5 }} text="Confirm" />
                </View>
            </View>
        )
    }
    const [showPopup, setShowPopup]: any = useState(false);
    const [popupMessage, setPopupMessage]: any = useState(successmessgae())
    const dateButtonDegisn = () => {
        return (
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 5, paddingLeft: 10, paddingRight: 10, gap: 13 }}>
                <Text style={{ ...fontConfig.GilroyRegular, fontSize: 14 }}>Date</Text>
                <Img style={{ width: 17, height: 15 }} source={require('@Asset/images/dateIcon.png')} />
            </View>
        )
    }
    const deleteOrder = (i: any) => {
        setShowPopup(true)
    }
    const confirmDelet = () => {
        setShowPopup(false)
    }
    const closePopup = (e:any) => {
        console.log(232323)
        setShowPopup(e)
    }
    return (
        <View style={{ height: '100%', backgroundColor: 'white', width: '100%', overflow: 'scroll' }}>
            <View style={styles.header}>
                <CustomHeader title='Order History' titleColor='black' iconColor='black' />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 0, width: '100%', marginTop: 5, marginBottom: 5 }}>
                <DaterangePicker openButton={dateButtonDegisn()} onDateRangeSelected={onDateRangeSelected} />
                <IconButton onPress={onPress} textStyle={{ color: 'rgba(20, 57, 187, 1)', fontSize: 14 }} text="+Add Files" />
            </View>

            <ScrollView style={styles.orderHistory}>
                {orderHistory.map((order: any, i: any) => {
                    return (
                        <View style={styles.orderdetails} key={i}>
                            <View style={styles.flexRow}>
                                <Text>{order.fileName}</Text>
                                <TouchableOpacity onPress={() => deleteOrder(i)}>
                                    <Img style={{ width: 15, height: 15 }} source={require("@Asset/images/delete.png")} />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.flexRow, { marginTop: 5 }]}>
                                <View style={[{ flex: 1 }]}>
                                    <Text style={{ fontSize: 12, ...fontConfig.GilroyMedium, color: 'rgba(134, 134, 134, 1)' }}>{order.distributorName}</Text>
                                </View>
                                <View style={[{ flex: 1 }, styles.flexRow]}>
                                    <View style={[{ flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'row' }]}>
                                        <Img style={{ width: 5, height: 5 }} source={require("@Asset/images/dotIcon.png")} />
                                        <Text style={{ marginLeft: 4, fontSize: 12, ...fontConfig.GilroyMedium, color: 'rgba(134, 134, 134, 1)' }}>
                                            {order.date}
                                        </Text>
                                    </View>
                                    <View style={[{ flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'row' }]}>
                                        <Img style={{ width: 5, height: 5 }} source={require("@Asset/images/dotIcon.png")} />
                                        <Text style={{ marginLeft: 4, fontSize: 12, ...fontConfig.GilroyMedium, color: 'rgba(134, 134, 134, 1)' }}>
                                            {order.fileSize}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
            <Popup closePopup={(e) => closePopup(e)} focusToclose={false} showPopup={showPopup} content={popupMessage} />
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        paddingTop: 10
    },
    orderdetails: {
        borderWidth: 1,
        borderColor: 'rgba(245, 245, 245, 1)',
        padding: 12,
        marginBottom: 10,
        borderRadius: 6

    },
    orderHistory: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    successMessage: {
        padding: 0,
        paddingTop: 25,
    },
    popupTitle: {
        color: 'rgba(3, 3, 3, 1)',
        fontSize: 18,
        ...fontConfig.GilroyBold,
        textAlign: 'center',
        marginTop: 20,
        flexWrap: 'wrap'
    },


})