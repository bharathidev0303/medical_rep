import React, { useRef, useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const Loader = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    // First set up animation
    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 1300,  // Duration of one full rotation
                useNativeDriver: true,
            })
        ).start();
    }, [spinValue]);

    // Interpolate the spin value to create a rotating animation
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('@Asset/images/loader.png')}
                style={[styles.image, { transform: [{ rotate: spin }] }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 60,  // Set your desired width
        height: 60, // Set your desired height
    },
});

export default Loader;