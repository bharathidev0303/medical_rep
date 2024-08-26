
import { Img, CustomTextbox, Button, Otpbox } from "@MR/components"
import { colors, fontConfig } from "@MR/shared"
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from "react-native"
import { CodeField, Cursor, useBlurOnFulfill } from "react-native-confirmation-code-field"

interface Onboardingprops {
    title: String,
    type: 'numeric' | 'email' | 'otp',
    label?: String,
    buttonLabel: String,
    buttonPress?: () => void,
    inputChange: (e: any) => void,
    inputKeypress?: (e: any) => void,
    description?: String,
    disabled?: Boolean
    value: any
}

export const OnboadringScreen = (props: Onboardingprops): JSX.Element => {
    const [otp, setOtp] = useState('');
    const numberRegexCheck = (otpCode: string) => {
        const numbers = otpCode.match(/\d+/g);
        const validCode = Array.isArray(numbers) ? numbers.join('') : '';
        return validCode;
    };

    return (
        <>
            <View style={{ width: '100%' }}>
                <View style={styles.logobox}>
                    <Img style={{ width: 73, height: 35 }} source={require("@Asset/images/sitelogo.png")} />
                    <Text style={styles.logotitle}>pharmarack</Text>
                </View>
                <View style={styles.pageTitle}>
                    <Text style={styles.pageTitletext}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>{props.label}</Text>
                    {props.type == 'email' || props.type == 'numeric' ?
                        <CustomTextbox value={props.value} maxLength={500} focus={true} inputChange={props.inputChange} inputMode={props.type} />
                        : <Otpbox value={props.value} inputChange={props.inputChange} />
                    }
                    <View>
                        <Button onPress={props.buttonPress} disabled={props.disabled == true ? true : false} style={styles.button} outerStyle={{ borderRadius: 10 }} text={props.buttonLabel.toString()}></Button>
                    </View>
                </View>

            </View>

        </>
    )
}



const styles = StyleSheet.create({
    codeFieldRoot: { marginTop: 2 },
    cell: {
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 6,
        height: 70,
        width: 70,
        fontSize: 28,
        lineHeight: 68,
    },
    focusCell: {
        borderColor: '#293462'
    },
    logobox: {
        margin: 'auto',
        marginTop: '25%',
        display: 'flex',
        alignItems: 'center',

    },
    logotitle: {
        color: '#030303',
        fontSize: 30,
        textAlign: 'center',
        ...fontConfig.GilroyBold,
        letterSpacing: .5
    },
    pageTitle: {
        marginTop: 90,
        maxWidth: 200,
        margin: 'auto',
    },
    pageTitletext: {
        textAlign: 'center',
        fontSize: 32,
        ...fontConfig.GilroyBold,
        color: '#000000'

    },
    description: {
        textAlign: 'center',
        marginTop: 5,
        height: 80,
        ...fontConfig.GilroyMedium,
        fontSize: 14
    },
    form: {
        width: '88%',
        margin: 'auto'
    },
    label: {
        marginBottom: 7,
        ...fontConfig.GilroyMedium,
        fontSize: 14,
        color: colors.label.colors
    },
    button: {
        marginTop: 35
    }
});
