import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';


export const setStorage = (key: String, value: String) => {
    if (Platform.OS == 'web') {
        localStorage.setItem(key.toString(), value.toString())
    }
    else {
        SecureStore.setItemAsync(key.toString(), value.toString());
    }
}