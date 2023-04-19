import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Button from "./Button";

const MatchBox = ({ item }) => {
  return (
    <Pressable
      onPress={() => {
        console.log("hello");
      }}
    >
      <View style={styles.container}>
        <View style={[styles.section, styles.section1]}>
          <Text>{item.name}</Text>
          <Text>{item.leauge}</Text>
        </View>
        <View style={[styles.section, styles.section2]}>
          <Text>{item.date}</Text>
          <Text>{item.kick_off}</Text>
          <Text>{item.location}</Text>
        </View>
        <View style={[styles.section, styles.section3]}>
          <Text>{item.looking_for}</Text>
        </View>
        {/* <View style={[styles.section, styles.section4]}>
        <Button title="Sign Up!" onPress={() => {}} />
      </View> */}
      </View>
    </Pressable>
  );
};
// {item.meet_up}
// {item.location}
// {item.comments}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fffdd0",
    margin: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderColor: "blue",
    borderWidth: 2,
  },
  section: {
    // flex: 1,
    borderColor: "red",
    borderWidth: 1,
    flexWrap: "wrap",
  },
  section1: {
    flex: 3,
  },
  section2: {
    flex: 2,
  },
  section3: {
    flex: 1,
  },
});

export default MatchBox;
