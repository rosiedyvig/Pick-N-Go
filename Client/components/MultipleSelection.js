import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MultiSelect from "react-native-multiple-select";

// Dummy Data for the MutiSelect
// const items = [
//   { id: 1, name: "1" },
//   { id: 2, name: "2" },
//   { id: 3, name: "3" },
//   { id: 4, name: "4" },
//   { id: 5, name: "5" },
//   { id: 6, name: "6" },
//   { id: 7, name: "7" },
//   { id: 8, name: "8" },
//   { id: 9, name: "9" },
//   { id: 10, name: "10" },
//   { id: 11, name: "11" },
//   { id: 12, name: "12" },
//   { id: 13, name: "13" },
//   { id: 14, name: "14" },
//   { id: 15, name: "15" },
//   { id: 16, name: "Opposition" },
// ];

const MultipleSelection = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="#48d22b"
          submitButtonText="Submit"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  headingText: {
    padding: 8,
  },
});

export default MultipleSelection;
