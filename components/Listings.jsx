import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

const Listings = ({ listings }) => {
  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity>
        <View className="bg-white p-2 mr-5 rounded-lg w-[220px] ">
          <View className="items-center">
            <Image source={{uri: item.image}} className="h-[200px] w-[200px] rounded-lg mb-7 items-center"/>
          </View>
          <View className="absolute top-[185px] right-[30px] bg-primaryBlue rounded-full p-2 border-2 border-white">
            <Ionicons name="bookmark-outline" size={20} color={'#FFFFFF'} />
          </View>
          <Text className="text-[16px] font-semibold text-black mb-2.5" numberOfLines={1} ellipsizeMode='tail'> 
            {item.name}
          </Text>
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <FontAwesome5 name="map-marker-alt" size={18} color={'#002160'} />
              <Text className="text-[12px] ml-1.5">{item.location}</Text>
            </View>
            <Text className="text-[12px] font-semibold text-primaryColor">
              ${item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList data={listings} renderItem={renderItems} horizontal showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default Listings