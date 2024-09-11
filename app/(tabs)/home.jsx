import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import homeBg from '../../assets/images/home-bg.jpeg';
import { Ionicons, FontAwesome6, Entypo } from '@expo/vector-icons';

export default function Home() {
    return (
        <SafeAreaView className="flex flex-1">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Search Bar */}
                <View className="w-full mb-4 px-5 pb-2.5">
                    <TextInput 
                        placeholder="Search for Function"
                        className="rounded-full p-3 text-[#002160] bg-emerald-100"
                    />
                    <TouchableOpacity className="absolute right-9 top-3.5">
                        <Ionicons name="search" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
                {/* Image with Text Overlay */}
                <View className="relative w-full">
                    <View className="">
                        <Image 
                            source={homeBg} 
                            className="w-full h-[285px] object-cover" 
                        />
                    </View>
                    <View className="absolute inset-0 bg-black/50 justify-center p-5 h-[285px] w-[420px]">
                        <Text className="text-white text-[31px] font-bold font-inter mb-2">
                            Beyond Real Estate
                        </Text>
                        <Text className="text-white text-[13px] font-normal">
                            Empower your future with RentEase Property's innovative platform, revolutionizing your approach to real estate. Gain a competitive edge with our cutting-edge tools and personalized solutions, redefining your journey in today's dynamic market.
                        </Text>
                    </View>
                </View>

                {/* Section Title */}
                <View className="p-5">
                    <View>
                        <Text className="w-[390px] h-12 mt-5 text-center text-[#242a33] text-[27px] font-medium capitalize leading-[30px] pr-5">
                            What we provide
                        </Text>
                        <Text className="h-14 text-center text-[#0d0d0d] text-base font-medium leading-snug">
                            Where every home boasts exceptional features for unparalleled living.
                        </Text>
                    </View>
                    <View className="items-center mt-10">
                        <Ionicons name="document-lock" size={40} color="#37cfb3" />
                        <Text className="w-[73px] text-center text-black text-[15px] font-semibold leading-7">
                            Leasing
                        </Text>
                        <Text className="px-5 text-center text-neutral-400 text-[13px] font-normal leading-none">
                            Simplify property management tasks with our all-inclusive leasing platform, automating processes and optimizing facility operations.
                        </Text>
                    </View>
                    <View className="items-center mt-10">
                        <FontAwesome6 name="money-bill-transfer" size={40} color="#37cfb3" />
                        <Text className="w-[75px] text-center text-black text-[15px] font-semibold leading-7">
                            Rent/Bills
                        </Text>
                        <Text className="px-5 text-center text-neutral-400 text-[13px] font-normal leading-none">
                            Streamline rent and bill management effortlessly with our comprehensive platform, ensuring compliance and efficiency.
                        </Text>
                    </View>
                    <View className="items-center mt-10">
                        <Entypo name="tools" size={40} color="#37cfb3" />
                        <Text className="w-[73px] text-center text-black text-[15px] font-semibold leading-7">
                            Repairs
                        </Text>
                        <Text className="px-6.5 text-center text-neutral-400 text-[13px] font-normal leading-none">
                            Seamlessly manage house repairs with our intuitive platform, from scheduling to coordination with service providers.
                        </Text>
                    </View>
                    <View className="items-center mt-10">
                        <FontAwesome6 name="toolbox" size={40} color="#37cfb3" />
                        <Text className="w-[150px] text-center text-black text-[15px] font-semibold leading-7">
                            Review/Renewal
                        </Text>
                        <Text className="px-5 text-center text-neutral-400 text-[13px] font-normal leading-none">
                            Facilitate transparent renewal negotiations and efficient documentation management with our user-friendly platform for house review and renewal processes.
                        </Text>
                    </View>
                    <View>
                        <Text className="w-[390px] mt-20 text-center text-[#242a33] text-[27px] font-medium capitalize leading-[30px] pr-5">
                            Explore rented properties in your area
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
