import React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Img } from './Img';
import { fontConfig } from '@MR/shared';
import { deleteStorage } from '@MR/secureStorage';
import { router } from 'expo-router';

interface props {
    title: String,
    titleColor?: String,
    iconColor?: String
}
export const CustomHeader: React.FC<props> = ({
    title,
    titleColor,
    iconColor
}) => {

    return (
        <View style={styles.header}>
            <Text style={[styles.titleColor, titleColor == 'white' ? styles.whiteColor : {}]}>{title}</Text>
            <TouchableOpacity
                onPress={() => {
                    deleteStorage('token');
                    router.replace('/');
                }}
            >
                {iconColor == 'white' ? <Img style={{ width: 29, height: 29 }} source={require('@Asset/images/profile-icon-white.png')} /> : <Img style={{ width: 40, height: 40 }} source={require('@Asset/images/profile-icon-black.png')} />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    titleColor: {
        color: "#000000",
        fontSize: 24,
        ...fontConfig.GilroyBold
    },
    whiteColor: {
        color: "white"
    }
})