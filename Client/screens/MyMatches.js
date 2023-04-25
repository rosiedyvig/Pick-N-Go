import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Map from "../components/Map";

const item = {
  __v: 0,
  _id: "6442a6aee2730bfe91422b58",
  comments:
    "We are very nice and have a lot of newbies! Will be a good match! ",
  createdAt: "2023-04-21T15:07:26.604Z",
  date: "Sun 7th May",
  kick_off: "2:45 pm",
  latitude: "51.3562",
  leauge: "NC 1 North",
  location: "BS40 8UE",
  longitude: "-2.6292",
  looking_for: "14",
  meet_up: "12:00 pm",
  name: "Chew Valley Cats Ladies",
  updatedAt: "2023-04-21T15:07:26.604Z",
};

const MyMatches = ({ navigation }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalTextTitle}>{item.name} need you!</Text>
        <View style={styles.row}>
          <View style={styles.modalText}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Meet Up: {item.meet_up}
            </Text>
            <Text>Kick Off: {item.kick_off}</Text>
            <Text>Location: {item.location}</Text>
            <Text style={styles.modalTextComments}>
              We are looking for {item.looking_for}. {item.comments}
            </Text>
          </View>
          <Pressable onPress={() => {}}>
            <View style={styles.map}>
              <Map item={item} />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MyMatches;
