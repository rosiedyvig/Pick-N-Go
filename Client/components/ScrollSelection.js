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
            style={styles.picker}
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
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    marginBottom: 15,
  },
  picker: {
    width: "100%",
  },
});

export default ScrollSelection;
