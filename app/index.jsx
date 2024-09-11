import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-lg">LETSFUCKINGO</Text>
      <Pressable
        onPress={() => router.push('/(tabs)/home')} 
        className="bg-blue-500 p-4 mt-4 rounded"
      >
        <Text className="text-white">Go to Home</Text>
      </Pressable>
    </View>
  );
}
