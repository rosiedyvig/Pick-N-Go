import React, { useState, useCallback, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { getLongLat } from "../API";

import { postMatch } from "../API";
import { TEAMS, LEAGUES, POSITIONS } from "../db";
import ScrollSelection from "../components/ScrollSelection";
import DateSelection from "../components/DateSelection";
import TimeSelection from "../components/TimeSelection";
import MultipleSelection from "../components/MultipleSelection";

const AddFixtureModal = ({ navigation }) => {
  const [name, setName] = useState("");
  const [league, setLeague] = useState("");
  const [date, setDate] = useState(new Date());
  const [kick_off, setKickOff] = useState(new Date());
  const [meet_up, setMeetUp] = useState(new Date());
  const [location, setLocation] = useState("");
  const [looking_for, setLookingFor] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = useCallback(async () => {
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

    console.log("inside use effect in the add fixture comp");
    const convertLocation = async () => {
      const answer = await getLongLat(location);
      newMatch.longitude = answer.longitude;
      newMatch.latitude = answer.latitude;
    };
    await convertLocation();

    postMatch(newMatch);

    navigation.navigate("ClubMain");
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      style={styles.container}
    >
      <View
        style={styles.inputContainer}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always"
      >
        {/* <MultipleSelection items={POSITIONS} /> */}
        <Text>Club Name</Text>
        <ScrollSelection items={TEAMS} onSelect={setName} />
        <Text>League</Text>
        <ScrollSelection items={LEAGUES} onSelect={setLeague} />
        <Text>What are you looking for</Text>
        <ScrollSelection items={POSITIONS} onSelect={setLookingFor} />
        <Text>Date</Text>
        <DateSelection date={date} setDate={setDate} />
        <Text>Kick Off</Text>
        <TimeSelection time={kick_off} setTime={setKickOff} />
        <Text>Meet Up Time</Text>
        <TimeSelection time={meet_up} setTime={setMeetUp} />
        <Text>Location of Pitch</Text>
        <TextInput
          style={styles.input}
          value={location}
          placeholder="enter the post code of the pitch"
          onChangeText={setLocation}
        />
        <Text>Any Comments?</Text>
        <TextInput
          style={styles.input}
          value={comments}
          placeholder="do you have a ref already? Can you promise a thank you pint?"
          onChangeText={setComments}
        />
        <Button title="Add a fixture" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 15,
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
