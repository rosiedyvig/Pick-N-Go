import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateSelection = ({ date, setDate }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleSelect = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
    setShowPicker(false);
  };
  return (
    <Pressable
      onPress={() => {
        setShowPicker(true);
      }}
    >
      <DateTimePicker
        style={styles.dateinput}
        value={date}
        mode="date"
        display="default"
        onChange={handleSelect}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dateinput: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default DateSelection;
