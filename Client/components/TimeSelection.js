import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
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
    <>
      {/* <Pressable
      onPress={() => {
        setShowPicker(true);
      }}
      >
        <Text style={styles.input} placeholder={"Add the fixture time"}>
          {time.toLocaleTimeString()}
        </Text>
      </Pressable> */}

      {showPicker && (
        <DateTimePicker
          style={styles.dateinput}
          value={time}
          mode="time"
          display="default"
          onChange={handleSelect}
        />
      )}
    </>
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

export default TimeSelection;
