import React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';

interface props {
    style?: { width?: any, height?: any },
    inputChange?: (e: any) => void,
    inputKeypress?: (e: any) => void,
    value?: any,
    inputMode: 'email' | 'numeric' | 'text' | 'tel' | 'search' | 'none',
    focus?: Boolean,
    maxLength?: Number
}
export const CustomTextbox : React.FC<props> = ({
    style,
    inputChange,
    inputKeypress,
    value,
    inputMode,
    focus=false,
    maxLength,
  }) =>{
    let [focuss, setFocus] = useState({})
    const onFocus = (e: any, type: any) => {
        console.log(e, type, 324234);
        if (focus && type == 'onFocus') {
            setFocus(styles.focusDesign);
        }
        else {
            setFocus({});
        }
    }
    return (
        <TextInput maxLength={maxLength != null ? Number(maxLength) : 5000} onChangeText={inputChange} onBlur={(e) => onFocus(e, 'onBlur')} onFocus={(e) => onFocus(e, 'onFocus')} inputMode={inputMode} value={value} style={[styles.inputStyle, focuss]} />
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: 'rgb(245 245 245)',
        color: '#030303',
        fontFamily: 'GilroyMedium',
        fontWeight: '400',
        fontSize: 18,
        padding: 13,
        borderRadius:5,
        paddingLeft:20

    },
    focusDesign: {
        borderWidth: 1,
        borderColor: '#1439BB',
    }
})