import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { postMatch } from "../API";
import { TEAMS, LEAGUES, POSITIONS } from "../db";
import ScrollSelection from "../components/ScrollSelection";

const AddFixtureModal = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [league, setLeague] = useState("");
  const [date, setDate] = useState(new Date());
  const [kick_off, setKickOff] = useState(new Date());
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
      league,
      date,
      kick_off,
      meet_up,
      location,
      looking_for,
      comments,
    };

    console.log(newMatch);
    postMatch(newMatch);

    navigation.navigate("ClubMain");
  });

  //for name
  // const [isNamePickerVisible, setNamePickerVisible] = useState(false);
  // const [selectedNameValue, setNameSelectedValue] = useState("select name");

  // const handleNamePress = () => {
  //   setNamePickerVisible(true);
  // };

  // const handleNamePickerSelect = (itemValue) => {
  //   setNameSelectedValue(itemValue);
  //   setName(itemValue);
  //   setNamePickerVisible(false);
  // };

  //for League
  const [isLeaguePickerVisible, setLeaguePickerVisible] = useState(false);
  const [selectedLeagueValue, setLeagueSelectedValue] = useState("");

  const handleLeaguePress = () => {
    setLeaguePickerVisible(true);
  };

  const handleLeaguePickerSelect = (itemValue) => {
    setLeagueSelectedValue(itemValue);
    setLeague(itemValue);
    setLeaguePickerVisible(false);
  };

  //for Date
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateSelect = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
    setShowDatePicker(false);
  };

  //for Kick Off
  const [showKickOffPicker, setShowKickOffPicker] = useState(false);

  const handleKickOffSelect = (event, selectedKickOff) => {
    const currentKickOff = selectedKickOff || kick_off;
    setShowKickOffPicker(Platform.OS === "ios");
    setKickOff(currentKickOff);
    setShowKickOffPicker(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      style={styles.container}
    >
      <ScrollView style={styles.inputContainer}>
        {/* <Text>Club Name</Text>
        <Pressable onPress={handleNamePress} style={styles.input}>
          <Text>
            {selectedNameValue ? selectedNameValue : "Select Your Club Name"}
          </Text>
        </Pressable>
        {isNamePickerVisible && (
          <Picker
            style={styles.picker}
            selectedNameValue={selectedNameValue}
            onValueChange={handleNamePickerSelect}
          >
            {TEAMS.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>
        )} */}

        {/* <Text>League</Text>
        <Pressable onPress={handleLeaguePress} style={styles.input}>
          <Text>
            {selectedLeagueValue
              ? selectedLeagueValue
              : "Select Your Club's League"}
          </Text>
        </Pressable>
        {isLeaguePickerVisible && (
          <Picker
            style={styles.picker}
            selectedLeagueValue={selectedLeagueValue}
            onValueChange={handleLeaguePickerSelect}
          >
            {LEAGUES.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>
        )} */}
        <Text>Club Name</Text>
        <ScrollSelection items={TEAMS} onSelect={setName} />
        <Text>League</Text>
        <ScrollSelection items={LEAGUES} onSelect={setLeague} />
        <Text>Date</Text>
        <Pressable
          onPress={() => {
            setShowDatePicker(true);
          }}
        >
          {/* {showDatePicker && ( */}
          <DateTimePicker
            style={styles.dateinput}
            value={date}
            mode="date"
            display="default"
            onChange={handleDateSelect}
          />
          {/* )} */}
          {/* <Text style={styles.dateinput} placeholder={"Add the fixture date"}> */}
          {/* {date.toDateString()} */}
          {/* <DateTimePicker value={date} />
          </Text> */}
        </Pressable>

        <Text>Kick Off Time</Text>
        <Pressable
          onPress={() => {
            setShowKickOffPicker(true);
          }}
        >
          <Text style={styles.input} placeholder={"Add the fixture time"}>
            {kick_off.toLocaleTimeString()}
          </Text>
        </Pressable>

        {showKickOffPicker && (
          <DateTimePicker
            value={kick_off}
            mode="time"
            display="default"
            onChange={handleKickOffSelect}
          />
        )}

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
        {/* <Text>What are you looking for</Text>
        <TextInput
          style={styles.input}
          value={looking_for}
          placeholder="select the positions you need or opposition"
          onChangeText={setLookingFor}
        /> */}
        <Text>What are you looking for</Text>
        <ScrollSelection items={POSITIONS} onSelect={setLookingFor} />
        <Text>Any Comments?</Text>
        <TextInput
          style={styles.input}
          value={comments}
          placeholder="do you have a ref already? Can you promise a thank you pint?"
          onChangeText={setComments}
        />
        <Button title="Add a fixture" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dateinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  picker: {
    width: "100%",
    height: 300,
  },
  inputContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
});

export default AddFixtureModal;
