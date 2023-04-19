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
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const AddFixtureModal = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [league, setLeague] = useState("");
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
      league,
      date,
      kick_off,
      meet_up,
      location,
      looking_for,
      comments,
    };
    navigation.navigate("ClubMain", { newMatch });
  });

  const teams = [
    "Aldwinian Women",
    "Amber Valey Tigers Ladies",
    "Battersea Ironsides Women",
    "Battersea Ironsides Women II",
    "Bec Belles Ladies",
    "Beccehamian Ladies",
    "Belsize Park Women",
    "Biggleswade Ladies",
    "Birkenhead Park Ladies",
    "Birmingham Moseley Women",
    "Blaydon Redkites Women",
    "Blaydon Redkites Women II",
    "Bury Fox Ladies",
    "Bury Ladies",
    "Camberly Women",
    "Camborne Women",
    "Cambridge Women",
    "Cannock Lionesses Ladies",
    "Caterbury Ladies",
    "Caslisle Cougars Ladies",
    "Cheddar Ladies",
    "Chelmsfrod Ladies",
    "Cheltenham Civil Service Ladies",
    "Cheltenham Ladies II",
    "Crawley Ladies",
    "Crediton Ladies",
    "Crewe & Nantwich Ladies",
    "Crowthorne Ladies",
    "Cullompton Ladies",
    "Darlington Ladies",
    "Driffield Ladies",
    "Drybrook Ladies",
    "Dudley Kingswinford Ladies",
    "Dursley Ladies",
    "Ealing Trailfinders Ladies",
  ];

  LEAGUES = [
    "Championship North 1",
    "Championship South 1",
    "Championship Midlands 2",
    "Championship North 2",
    "Championship South East 2",
    "Championship South West 2",
    "NC 1 East",
    "NC 1 Midlands",
    "NC 1 North",
    "NC 1 North West",
    "NC 1 South East (East)",
    "NC 1 South East (West)",
    "NC 1 South West (East)",
    "NC 1 South West (West)",
    "NC 2 Midlands (Central)",
    "NC 2 Midlands (East)",
    "NC 2 Midlands (North East)",
    "NC 2 Midlands (West)",
    "NC 2 North (East)",
    "NC 2 North (North)",
    "NC 2 North (West)",
    "NC 2 South East (Central)",
    "NC 2 South East (East)",
    "NC 2 South East (North)",
    "NC 2 South East (South)",
    "NC 2 South East (West)",
    "NC 2 South West (Central)",
    "NC 2 South West (North)",
    "NC 2 South West (East)",
    "NC 2 South West (West)",
    "NC 3 Midlands (East)",
    "NC 3 Midlands (South)",
    "NC 3 Midlands (West)",
    "NC 3 North (Central)",
    "NC 3 North (East)",
    "NC 3 North (North)",
    "NC 3 North (South)",
    "NC 3 North (West)",
    "NC 3 South East (East)",
    "NC 3 South East (South)",
    "NC 3 South East (West)",
    "NC 3 South West (East)",
    "NC 3 South West (North)",
    "NC 3 South West (South)",
    "NC 3 South West (West)",
  ];

  //for name
  const [isNamePickerVisible, setNamePickerVisible] = useState(false);
  const [selectedNameValue, setNameSelectedValue] = useState("select name");

  const handleNamePress = () => {
    setNamePickerVisible(true);
  };

  const handleNamePickerSelect = (itemValue) => {
    setNameSelectedValue(itemValue);
    setName(itemValue);
    setNamePickerVisible(false);
  };

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      style={styles.container}
    >
      <ScrollView style={styles.inputContainer}>
        <Text>Club Name</Text>
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
            {teams.map((item, index) => (
              <Picker.item key={index} label={item} value={item} />
            ))}
          </Picker>
        )}

        <Text>League</Text>
        {/* <TextInput
          style={styles.input}
          value={league}
          placeholder="select your Leauge"
          onChangeText={setLeague}
        /> */}

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
              <Picker.item key={index} label={item} value={item} />
            ))}
          </Picker>
        )}
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
