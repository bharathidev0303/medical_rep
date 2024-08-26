
import { Img } from "@MR/components"
import { View, Text } from "react-native"
import { OnboadringScreen } from "./onboadring"
import { useEffect, useState } from "react"
import { Redirect, router } from "expo-router"
import { useApi } from "@MR/apiservice"
import { setStorage } from "@MR/secureStorage"

export const LoginScreen = () => {
    const [disabled, setDisabled] = useState(true)
    const [value, setValue] = useState('')
    const inputChange = (e: any) => {
        setValue(e);

    }
    const { fetchData, updateData, deleteData, sendData, loading, error } = useApi();
    useEffect(() => {
        if (value != null && value != '') {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }, [value])
    const buttonPress = async () => {
        console.log(3423)
        try {
            let res = await sendData({ endpoint: '/mr/sendotp', data: { "authChannel": "mobile", mobile: '091' + value } })
            if (res) {
                setStorage('otpToken', res.temptoken);
                setStorage('otp', res.mobile?.otp);
                setStorage('mobile', '091' + value);
                router.replace('/(noAuthorized)/Otp');
            }
        }
        catch (e) {
            console.log(e, 234234)
        }
    }
    return (
        <View style={{ height: '100%', backgroundColor: 'white', width: '100%', overflow: 'scroll' }}>
            <OnboadringScreen value={value} disabled={disabled} buttonPress={buttonPress} inputChange={inputChange} title='Login' label='Email address/Mobile number' type='email' buttonLabel='Continue' />
        </View>
    )
}
