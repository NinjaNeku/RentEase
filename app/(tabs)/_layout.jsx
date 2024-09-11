import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function RootLayoutNav() {
  return (
    <>
        <StatusBar style="dark" backgroundColor="#FFF"/>
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: "#FFFFFF",
                borderTopWidth: 0,
                padding: 0,
              },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#000",
            tabBarInactiveTintColor: "#999",
        }}>
            <Tabs.Screen name="home" options={{
              headerShown: false,
              tabBarIcon: ({color}) => (<Ionicons name="home" size={24} color={color}/>),
            }}/>
        </Tabs>
    </>
  )
}