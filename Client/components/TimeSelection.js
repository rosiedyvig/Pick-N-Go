import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const TimeSelection = ({ time, setTime }) => {
  const [showPicker, setShowPicker] = useState(true);

  const handleSelect = (event, selectedTime) => {
    const current = selectedTime || time;
    setShowPicker(Platform.OS === "ios");
    setTime(current);
    //setShowPicker(false);
  };

  return (
    <View style={styles.dateinput}>
      {showPicker && (
        <DateTimePicker
          style={styles.date}
          value={time}
          mode="time"
          display="default"
          onChange={handleSelect}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateinput: {
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: "row",
    marginBottom: 15,
  },
  date: {
    alignSelf: "flex-start",
  },
});

export default TimeSelection;
