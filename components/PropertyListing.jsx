import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const PropertyCard = ({ LLimg, propImg, propName, LLname }) => {
  return (
    <TouchableOpacity className="flex-row items-center justify-between bg-white border-gray-400 rounded-3xl mb-5">
        <View>
            <Image source={{uri: propImg}} className="h-[77px] w-[120px] rounded-l-3xl" style={{ resizeMode: 'cover' }}/>
        </View>
        <View>
            <Image source={{uri: LLimg}} className="h-[50px] w-[50px] rounded-full"/>
        </View>
        <View className="p-4">
            <Text className="w-[110px] text-[#1d1b20] text-sm font-medium leading-normal tracking-tight mb-1" numberOfLines={1} ellipsizeMode='tail'>
                {propName}
            </Text>
            <Text className="w-[56.81px] text-[#1d1b20] text-xs font-normal leading-tight tracking-tight" >
                {LLname}
            </Text>
        </View>
        <View className="mr-5">
            <AntDesign name="caretright" size={24} color="black"/>
        </View>
    </TouchableOpacity>
  )
}

export default PropertyCard;