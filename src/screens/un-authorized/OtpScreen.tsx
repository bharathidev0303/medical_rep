import { router } from "expo-router"
import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { OnboadringScreen } from "./onboadring"
import { deleteStorage, getStorage, setStorage } from "@MR/secureStorage"
import { useIsFocused } from "@react-navigation/native"
import { useApi } from "@MR/apiservice"
import useStore from "@MR/utils/store"

export const OtpScreen = (): JSX.Element => {
    const [disabled, setDisabled] = useState(true)
    const [value, setValue] = useState('')
    const { setCustomers } = useStore();
    const inputChange = (e: any) => {
        setValue(e);
    }
    const { fetchData, updateData, deleteData, sendData, loading, error } = useApi();

    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            let otp: any = getStorage('otp');
            if (otp != null) {
                setValue(otp);
            }
        }
        else {
            setValue('');
        }

    }, [isFocused])
    useEffect(() => {
        if (value != null && value.length == 4) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }, [value])
    const buttonPress = async () => {
        try {
            let res = await sendData({ endpoint: '/mr/verifyotp', data: { "authChannel": "mobile", mobile: getStorage('mobile'), otp: value }, header: { 'Authorization': 'Bearer ' + getStorage('otpToken') } })
            if (res) {
                deleteStorage('otpToken');
                deleteStorage('otp');
                deleteStorage('mobile');
                setStorage('token', res.token)
                setStorage('refreshToken', res.refreshToken)
                router.replace('/(authorized)/Dashboard');
                setCustomers(res.customers);
            }
        }
        catch (e) {
            console.log(e, 234234)
        }
    }
    return (
        <View style={{ height: '100%', backgroundColor: 'white', width: '100%', overflow: 'scroll' }}>
            <OnboadringScreen description={'We have sent OTP on your Email address/Mobile number'} value={value} disabled={disabled} buttonPress={buttonPress} inputChange={inputChange} title='OTP' type='otp' buttonLabel='Submit' />
        </View>
    )
}
