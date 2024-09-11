import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements'

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#FFF"/>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{
          headerBackground: () => (
            <View className="bg-primaryBlue h-[100%] w-[100%]"/>
          ),
          headerTitle: 'RentEase',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: "#FFFFFF", height: 400 },
          headerRight: () => (
            <TouchableOpacity className="ml-2" onPress={() => {}}>
              <Image source={{uri: 'https://xsgames.co/randomusers/avatar.php?g=male'}} className="w-10 h-10 rounded-lg"/>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity 
              className="mr-2 p-2 rounded-lg shadow-lg shadow-[#171717] shadow-opacity-20 shadow-offset-2 shadow-offset-y-4 shadow-radius-3"
              style={{backgroundColor: "#FFFFFF"}} 
              onPress={()=>{}}
            >
              <Ionicons name="notifications" size={20}/>
            </TouchableOpacity>
          )
        }}/>
      </Stack>
    </>
  );
}
