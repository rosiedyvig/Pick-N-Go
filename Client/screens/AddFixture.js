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
  keyboardVerticalOffset,
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
      style={{ flex: 1 }}
      behavior="padding"
      enabled
      keyboardVerticalOffset={100}
    >
      <ScrollView style={styles.container}>
        <Text>Club Name</Text>
        <ScrollSelection items={TEAMS} onSelect={setName} />
        <Text>League</Text>
        <ScrollSelection items={LEAGUES} onSelect={setLeague} />
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
        <Text>What are you looking for</Text>
        <ScrollSelection items={POSITIONS} onSelect={setLookingFor} />
        <Text>Any Comments?</Text>
        <TextInput
          style={styles.input}
          value={comments}
          placeholder="do you have a ref already? Can you promise a thank you pint?"
          onChangeText={setComments}
          multiline={true}
        />
        <Button title="Add a fixture" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    marginBottom: 15,
  },
});

export default AddFixtureModal;
