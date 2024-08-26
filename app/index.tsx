import { DashboardScreen, LoginScreen } from "@MR/screens";
import { deleteStorage, getStorage } from "@MR/secureStorage";
import { Redirect, Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import Constants from 'expo-constants';


export default function Root() {

  let authorized = getStorage('token')
  // deleteStorage('token')
  const { manifest } = Constants;
const ENV = manifest?.releaseChannel === 'production' ? 'production' : 'development';
console.log(ENV,manifest?.releaseChannel,23232342)
  console.log(authorized, process.env,678976)
  if (authorized == null) {
    return (
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>)

  }
  return <Redirect href={"/(authorized)/Dashboard"} />
}
