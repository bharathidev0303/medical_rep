import { LoginScreen } from "@MR/screens";
import { getStorage } from "@MR/secureStorage";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {


    return (
        <SafeAreaView>
            <LoginScreen />
        </SafeAreaView>
    )
}