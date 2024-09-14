import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React, { useRef, useState } from 'react'
import destinationCategories from '../data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CategoryButton = ({onCatChanged}) => {
  const scrollRef = useRef(null);
  const itemRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);

    onCatChanged(destinationCategories[index].title);

    selected?.measureLayout(
      scrollRef.current,
      (x, y, width, height) => {
        scrollRef.current?.scrollTo({
          x: x - 10, 
          y: 0,
          animated: true
        });
      },
    );
  }
  
  return (
    <View>
      <Text className="text-[22px] font-bold mb-4">Categories</Text>
      <ScrollView 
        ref={scrollRef}
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{ gap: 20, paddingVertical: 10, marginBottom: 20 }}
        >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity 
          key={index} 
          ref={(el) => itemRef.current[index] = el} 
          onPress={() => handleSelectCategory(index)}
          className={`flex-row items-center px-4 py-2 rounded-lg shadow-md ${activeIndex === index ? 'bg-primaryBlue' : 'bg-white'}`}
          >
            <MaterialCommunityIcons 
              name={item.iconName} 
              size={20} 
              color={activeIndex === index ? 'white' : 'black'} 
              />
            <Text className={`ml-2 ${activeIndex === index ? 'text-white' : 'text-black'}`}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
  
  export default CategoryButton;
