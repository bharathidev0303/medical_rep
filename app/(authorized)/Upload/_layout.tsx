import { Tabs } from "expo-router";

export default function TabsLayout() {
     return (
    <Tabs screenOptions={{tabBarStyle:{display:'none'},headerShown:false}} >
        <Tabs.Screen key='browse' name="browse/index" options={{
          title: 'dashboard',
          tabBarLabel:'dashboard',
        }} />
        <Tabs.Screen  key='uploadfile' name="uploadfile/index"   options={{
          title: 'dashboard',
          tabBarLabel:'dashboard',
        }}/>
    </Tabs>
    )
  }
  