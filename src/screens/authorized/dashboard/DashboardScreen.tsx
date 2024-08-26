import { CustomHeader, Img } from "@MR/components"
import { colors, fontConfig } from "@MR/shared"
import { View, Text, StyleSheet } from "react-native"

export const DashboardScreen = (): JSX.Element => {

    const Total = (value: any, color: any) => {
        return (
            <Text style={[{ color: color }, { fontSize: 32 }, fontConfig.GilroyBold,]}>{value}</Text>
        )
    }
    const title = (value: any, color: any) => {
        return (
            <Text style={[{ color: color }, fontConfig.GilroyMedium, { fontSize: 14 }]}>{value}</Text>
        )
    }


    return (
        <View style={{ height: '100%', backgroundColor: 'white', width: '100%', overflow: 'scroll' }}>
            <View>
                <View style={styles.header}>
                    <CustomHeader title='Dashboard' titleColor='white' iconColor='white' />
                </View>
                <View style={styles.overlap}>
                    <Text style={styles.total}>Total: 40</Text>
                    <Text style={styles.date}>Last order: 20/07/2024</Text>
                </View>
                <View style={styles.dashboard}>
                    <View style={styles.fileUpload}>
                        <Img style={{ width: 45, height: 40 }} source={require('@Asset/images/fileupload.png')} />
                        <View>
                            {title('Files Uploaded', 'black')}
                            {Total(200, 'black')}
                        </View>
                    </View>
                    <View style={styles.status}>
                        <View style={styles.approved}>
                            {title('Approved', 'rgba(22, 149, 96, 1)')}
                            {Total(180, 'rgba(22, 149, 96, 1)')}
                        </View>
                        <View style={styles.rejected}>
                            {title('Rejected', 'rgba(238, 66, 38, 1)')}
                            {Total(20, 'rgba(238, 66, 38, 1)')}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.active.color,
        height: 170,
        paddingTop: 50
    },
    overlap: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.09,
        shadowRadius: 34,
        elevation: 10,
        width: '80%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: -30,
        backgroundColor: 'white',
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5
    },
    total: {
        ...fontConfig.GilroyBold,
        fontSize: 16,
        color: 'rgba(3, 3, 3, 1)'
    },
    date: {
        ...fontConfig.GilroyRegular,
        color: 'rgba(136, 136, 136, 1)',
        fontSize: 12
    },
    dashboard: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        top: 0,
        justifyContent: 'space-between',
        height: 230,
        marginTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        gap: 20
    },
    fileUpload: {
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    status: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        gap: 10,

    },
    approved: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#e8f4ef',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    rejected: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#fdece9',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})