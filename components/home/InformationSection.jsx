import { View, Text } from 'react-native';
import React from 'react';

const InformationSection = () => {
  return (
    <View className="w-[356px] h-[365px]">
      <Text className="w-[353px] mb-5 ml-2 mt-7 text-[15px] font-medium uppercase leading-[18px] text-[#00a29a]">
        DISCOVER THE EXCLUSIVE ADVANTAGES AND FEATURES OF PROPERTYSCAPE
      </Text>
      <View className="ml-1.5">
          <View className="mb-4">
            <Text>
              <Text className="text-[#0d0d0d] text-[13px] font-semibold leading-normal">
                • Email Notifications:{'\u00A0'}
              </Text>
              <Text className="text-[#0d0d0d] text-[13px] font-normal leading-normal">
                Access real-time information anytime, anywhere with email notifications.
              </Text>
            </Text>
          </View>

          <View className="mb-4">
            <Text>
              <Text className="text-[#0d0d0d] text-[13px] font-semibold leading-normal">
                • Easily Identify and Secure Leads:{'\u00A0'}
              </Text>
              <Text className="text-[#0d0d0d] text-[13px] font-normal leading-normal">
                Quickly identify and secure new leads for your business.
              </Text>
            </Text>
          </View>

          <View className="mb-4">
            <Text>
              <Text className="text-[#0d0d0d] text-[13px] font-semibold leading-normal">
                • Empower Clients with Information:{'\u00A0'}
              </Text>
              <Text className="text-[#0d0d0d] text-[13px] font-normal leading-normal">
                Provide clients with the information they need for confident decisions.
              </Text>
            </Text>
          </View>

          <View className="mb-4">
            <Text>
              <Text className="text-[#0d0d0d] text-[13px] font-semibold leading-normal">
                • Tools for Your Business:{'\u00A0'}
              </Text>
              <Text className="text-[#0d0d0d] text-[13px] font-normal leading-normal">
                Get essential tools to manage your business efficiently and never feel isolated.
              </Text>
            </Text>
          </View>

          <View className="mb-4">
            <Text>
              <Text className="text-[#0d0d0d] text-[13px] font-semibold leading-normal">
                • Strong Client Relationships:{'\u00A0'}
              </Text>
              <Text className="text-[#0d0d0d] text-[13px] font-normal leading-normal">
                Experience transparency through our real-time platform, fostering strong client relationships and long-term loyalty.
              </Text>
            </Text>
          </View>

          <View>
            <Text>
              <Text className="text-[#0d0d0d] text-[13px] font-semibold leading-normal">
                • Customizable Features:{'\u00A0'}
              </Text>
              <Text className="text-[#0d0d0d] text-[13px] font-normal leading-normal">
                Tailor the platform to your needs with customizable features, ensuring flexibility and efficiency.
              </Text>
            </Text>
          </View>
        </View>
    </View>
  );
};

export default InformationSection;
