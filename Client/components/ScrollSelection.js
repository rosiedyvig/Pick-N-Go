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
      <ScrollView style={styles.inputContainer}>
        <Pressable onPress={handlePress}>
          <Text>{selectedValue ? selectedValue : "Select From the below"}</Text>
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
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default ScrollSelection;
