import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Details from "./Details";

const team = require("../assets/teamwork.png");

const MatchBox = ({ item, setAlertMessage, matchArr, setMatches }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <Pressable onPress={handlePress}>
        <View style={[styles.container, styles.shadowProp]}>
          <View style={[styles.section, styles.section1]}>
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.subText}>{item.leauge}</Text>
          </View>
          <View style={[styles.section, styles.section2]}>
            <Text style={{ fontWeight: "400" }}>{item.date}</Text>
            <Text style={styles.header}>{item.kick_off}</Text>
            <Text style={styles.subText}>{item.location}</Text>
          </View>
          <View style={[styles.section, styles.section3]}>
            {item.looking_for !== "Opposition" ? (
              <Text style={styles.header}>{item.looking_for}</Text>
            ) : (
              <>
                <Text style={styles.tinyText}>Whole</Text>
                <Image style={styles.tinyLogo} source={team}></Image>
                <Text style={styles.tinyText}>Team</Text>
              </>
            )}
          </View>
        </View>
      </Pressable>
      <Details
        setAlertMessage={setAlertMessage}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
        matchArr={matchArr}
        setMatches={setMatches}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 15,
    borderColor: "#9CCC67",
    borderWidth: 9,
  },
  section: {
    flexWrap: "wrap",
    height: 80,
  },
  section1: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  section2: {
    flex: 2,
    alignItems: "center",

    justifyContent: "space-between",
    alignContent: "center",
  },
  section3: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subText: {
    fontWeight: "200",
    fontSize: 14,
  },
  tinyText: {
    fontSize: 7,
  },
});

export default MatchBox;
