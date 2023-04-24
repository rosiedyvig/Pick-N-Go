import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
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
      <View style={styles.dateinput}>
        <DateTimePicker
          style={styles.date}
          value={date}
          mode="date"
          display="default"
          onChange={handleSelect}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dateinput: {
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
  },
  date: {
    alignSelf: "flex-start",
  },
});

export default DateSelection;
