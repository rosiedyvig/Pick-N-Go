import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Details from "./Details";

const team = require("../assets/teamwork.png");

const MatchBox = ({ item, setAlertMessage }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
    console.log("inside press of the box");
  };

  return (
    <>
      <Pressable onPress={handlePress}>
        <View style={[styles.container, styles.shadowProp]}>
          <View style={[styles.section, styles.section1]}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontWeight: "200",
                fontSize: 14,
              }}
            >
              {item.leauge}
            </Text>
          </View>
          <View style={[styles.section, styles.section2]}>
            <Text style={{ fontWeight: "400" }}>{item.date}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {item.kick_off}
            </Text>
            <Text style={{ fontWeight: "200", fontSize: 14 }}>
              {item.location}
            </Text>
          </View>
          <View style={[styles.section, styles.section3]}>
            {item.looking_for !== "Opposition" ? (
              <Text>{item.looking_for}</Text>
            ) : (
              <>
                <Image style={styles.tinyLogo} source={team}></Image>
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
    // flex: 1,

    flexWrap: "wrap",
    height: 80,
  },
  section1: {
    flex: 4,
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
    // borderRadius: 1000,
    // borderColor: "grey",
    // borderWidth: 1,
    // width: 44,
    // height: 44,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
});

export default MatchBox;
