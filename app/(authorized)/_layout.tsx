import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomTabbar } from "@MR/components";
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs  screenOptions={{ headerShown: false, }} tabBar={props => <BottomTabbar {...props} />}>
      <Tabs.Screen key='Dashboard'
        name="Dashboard"
        options={{
          title: 'Dashboard',
          tabBarLabel: 'dashboard',
          href:null
        }}
      />
      <Tabs.Screen key='Upload'
        name="Upload"
        options={{
          title: 'Upload Order',
          tabBarLabel: 'Upload Order',
        }}
      />
      <Tabs.Screen key='History'
        name="History"
        options={{
          title: 'Order History',
          tabBarLabel: 'Order History',
        }}
      />
    </Tabs>
  );
}