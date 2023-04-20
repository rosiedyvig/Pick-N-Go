import React, { useState } from "react";
import { Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ScrollSelection = ({ items, onSelect }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handlePress = () => {
    setPickerVisible(true);
  };

  const handlePickerSelect = (itemValue) => {
    setSelectedValue(itemValue);
    onSelect(itemValue);
    setPickerVisible(false);
  };

  return (
    <>
      <Text>Club Name</Text>
      <ScrollView style={styles.inputContainer}>
        <Pressable onPress={handlePress}>
          <Text>{selectedValue ? selectedValue : "Select Your Club Name"}</Text>
        </Pressable>
        {isPickerVisible && (
          <Picker
            selectedValue={selectedValue}
            onValueChange={handlePickerSelect}
          >
            {items.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
});

export default ScrollSelection;
