import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomTabbar } from "@MR/components";
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs   initialRouteName="Login" screenOptions={{ headerShown: false,tabBarStyle:{display:'none'} }} >
      <Tabs.Screen key='Login'
        name="Login"
        options={{
          title: 'Login',
          tabBarLabel: 'Login',
          href:null
        }}
      />
      <Tabs.Screen key='OTP'
        name="Otp"
        options={{
          title: 'OTP',
          tabBarLabel: 'OTP',
          href:null
        }}
      />
    </Tabs>
  );
}