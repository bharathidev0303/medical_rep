import React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, TextInput, Text } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill } from 'react-native-confirmation-code-field';

interface props {
    inputChange: (code: any) => void,
    value?: any,
}
export const Otpbox: React.FC<props> = ({ inputChange, value }) => {
    const CELL_COUNT = 4;
    const [otp, setOtp] = useState(value);
    const ref = useBlurOnFulfill({ value: otp, cellCount: CELL_COUNT });
    const numberRegexCheck = (otpCode: string) => {
        const numbers = otpCode.match(/\d+/g);
        const validCode = Array.isArray(numbers) ? numbers.join('') : '';
        return validCode;
    };


    return (
        <CodeField
            ref={ref}
            value={value}
            onChangeText={(code: string) => {
                setOtp(numberRegexCheck(code));
                inputChange(code)
            }}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
                <Text
                    key={index}
                    style={[
                        styles.cell,
                        isFocused && styles.focusCell,
                        { marginLeft: index === 0 ? 0 : 10 }, symbol != null && symbol != '' && styles.focusCell
                    ]}
                >
                    {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
            )}
        />
    )
}




const styles = StyleSheet.create({
    codeFieldRoot: { marginTop: 2 },
    cell: {
        borderWidth: 0,
        textAlign: 'center',
        borderRadius: 6,
        height: 50,
        maxWidth: 50,
        width: '14%',
        fontSize: 20,
        padding: 10,
        backgroundColor: '#F5F5F5',
        color: '#1439BB'
    },
    focusCell: {
        borderWidth: 1,
        borderColor: '#1439BB'
    },

});
