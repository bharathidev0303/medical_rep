import { UploadScreen } from "@MR/screens";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {

    return (
        <SafeAreaView style={{ width: '100%',height:'100%' }}>
            <UploadScreen />
        </SafeAreaView>
    )
}