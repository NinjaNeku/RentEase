import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialIcons,
  Foundation,
} from "@expo/vector-icons";

const GetStartedSection = () => {
  return (
    <View className="flex-1 items-center justify-center px-4 py-6">
      {/* Title Section */}
      <Text className="text-[18px] font-semibold mb-6">Lets Get Started!</Text>

      {/* Grid Section */}
      <View className="flex flex-row flex-wrap justify-between mb-8">
        {/* First Row */}
        <View className="w-[48%] items-center mb-6">
          <FontAwesome name="user-circle-o" size={24} color="black" />
          <Text className="text-[#0d0d0d] text-[14px] font-semibold">
            Create Profile
          </Text>
          <Text className="text-[12px] text-gray-600 text-center">
            Set up your user profile to get started.
          </Text>
        </View>

        <View className="w-[48%] items-center mb-6">
          <FontAwesome5 name="house-user" size={24} color="black" />
          <Text className="text-[#0d0d0d] text-[14px] font-semibold">
            Add Property
          </Text>
          <Text className="text-[12px] text-gray-600 text-center">
            Add your property details to the platform.
          </Text>
        </View>

        {/* Second Row */}
        <View className="w-[48%] items-center mb-6">
          <MaterialIcons name="handshake" size={24} color="black" />
          <Text className="text-[#0d0d0d] text-[14px] font-semibold">
            Meet your leasing officer
          </Text>
          <Text className="text-[12px] text-gray-600 text-center">
            Connect with your leasing officer for further assistance.
          </Text>
        </View>

        <View className="w-[48%] items-center mb-6">
          <FontAwesome5 name="money-bill-wave" size={24} color="black" />
          <Text className="text-[#0d0d0d] text-[14px] font-semibold text-center">
            Inspection and Applications
          </Text>
          <Text className="text-[12px] text-gray-600 text-center">
            Manage property inspections and applications.
          </Text>
        </View>

        {/* Third Row */}
        <View className="w-[48%] items-center mb-6">
          <FontAwesome6 name="house-lock" size={24} color="black" />
          <Text className="text-[#0d0d0d] text-[14px] font-semibold">
            Reports and Sign Lease
          </Text>
          <Text className="text-[12px] text-gray-600 text-center">
            Access and sign lease agreements and generate reports.
          </Text>
        </View>

        <View className="w-[48%] items-center mb-6">
          <Foundation name="clipboard-notes" size={24} color="black" />
          <Text className="text-[#0d0d0d] text-[14px] font-semibold">
            Relax and Save
          </Text>
          <Text className="text-[12px] text-gray-600 text-center">
            Enjoy peace of mind and financial savings through our services.
          </Text>
        </View>
      </View>

      {/* Button Section */}
      <View className="flex flex-row space-x-4">
        <TouchableOpacity className="bg-[#007aff] px-6 py-2 rounded-full">
          <Text className="text-white text-[14px] font-semibold">
            Log in/Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="border border-[#007aff] px-6 py-2 rounded-full">
          <Text className="text-[#007aff] text-[14px] font-semibold">
            Start looking
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStartedSection;
