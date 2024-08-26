import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';


export const getStorage = (key: String) => {
    if (Platform.OS == 'web') {
        return localStorage.getItem(key.toString())
    }
    else {
        return SecureStore.getItem(key.toString());
    }

}