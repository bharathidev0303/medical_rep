import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';


export const deleteStorage = (key:any) => {
    if (Platform.OS == 'web') {
        return localStorage.removeItem(key.toString())
    }
    else {
        return SecureStore.deleteItemAsync(key.toString());
    }
}