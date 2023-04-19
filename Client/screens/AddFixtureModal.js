import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
//import { TEAMS, LEAGUES } from "../..db.js";

const AddFixtureModal = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [leauge, setLeauge] = useState("");
  const [date, setDate] = useState("");
  const [kick_off, setKickOff] = useState("");
  const [meet_up, setMeetUp] = useState("");
  const [location, setLocation] = useState("");
  const [looking_for, setLookingFor] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = useCallback(() => {
    if (name === "" || location === "" || meet_up === "") {
      Alert.alert("Please fill in every box to add a new event!");
      return;
    }

    const newMatch = {
      name,
      leauge,
      date,
      kick_off,
      meet_up,
      location,
      looking_for,
      comments,
    };
    navigation.navigate("ClubMain", { newMatch });
  });

  const items = [
    "Deeping Devils Ladies",
    "Derby Ladies",
    "Devizes Ladies",
    "Devonport Services Ladies",
    "Didcot Ladies",
    "Didsbury Toc H Ladies",
    "Dings Crusaders Women",
    "Doncaster Ladies",
    "Driffield Ladies",
    "Drybrook Ladies",
    "Dudley Kingswinford Ladies",
  ];

  const [isPickerVisible, setPickerVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handlePress = () => {
    setPickerVisible(true);
  };

  const handleNamePickerSelect = (itemValue) => {
    setSelectedValue(itemValue);
    setPickerVisible(false);
  };

  return (
    <>
      <SafeAreaView>
        <Text>Club Name</Text>
        <Pressable onPress={handlePress} style={styles.inputContainer}>
          <Text>{selectedValue ? selectedValue : "Select Team"}</Text>
        </Pressable>
        {isPickerVisible && (
          <Picker
            style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={handleNamePickerSelect}
          >
            {items.map((item, index) => (
              <Picker.item key={index} label={item} value={item} />
            ))}
          </Picker>
        )}

        <Text>Leauge</Text>
        <TextInput
          style={styles.input}
          value={leauge}
          placeholder="select your Leauge"
          onChangeText={setLeauge}
        />
        <Text>Date</Text>
        <TextInput
          style={styles.input}
          value={date}
          placeholder="select Date of Fixture"
          onChangeText={setDate}
        />
        <Text>Kick Off Time</Text>
        <TextInput
          style={styles.input}
          value={kick_off}
          placeholder="select kick off time"
          onChangeText={setKickOff}
        />
        <Text>Meet Up Time</Text>
        <TextInput
          style={styles.input}
          value={meet_up}
          placeholder="select meet up time"
          onChangeText={setMeetUp}
        />
        <Text>Location of Pitch</Text>
        <TextInput
          style={styles.input}
          value={location}
          placeholder="enter the post code of the pitch"
          onChangeText={setLocation}
        />
        <Text>What are you looking for</Text>
        <TextInput
          style={styles.input}
          value={looking_for}
          placeholder="select the positions you need or opposition"
          onChangeText={setLookingFor}
        />
        <Text>Any Comments?</Text>
        <TextInput
          style={styles.input}
          value={comments}
          placeholder="do you have a ref already? Can you promise a thank you pint?"
          onChangeText={setComments}
        />
        <Button title="Add a fixture" onPress={handleSubmit} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  picker: {
    width: "100%",
    height: 300,
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
});

export default AddFixtureModal;
