import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import Map from "../components/Map";

const grass = require("../assets/grass.avif");

const MyMatches = ({ navigation }) => {
  const isConfirmedFixture = useSelector((s) => s.confirmedFixture);
  const item = isConfirmedFixture;

  return (
    <ImageBackground source={grass} resizeMode="cover" style={styles.image}>
      <View>
        <View style={styles.modalView}>
          <Text style={styles.modalTextTitle}>
            You have signed up to play for {item.name}
          </Text>
          <View style={styles.row}>
            <View style={styles.modalText}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Meet Up: {item.meet_up}
              </Text>
              <Text>Kick Off: {item.kick_off}</Text>
              <Text>Location: {item.location}</Text>
              <Text style={styles.modalTextComments}>
                {item.name} are looking for a {item.looking_for}.{" "}
                {item.comments}
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 40,
    elevation: 15,
  },
  map: {
    width: 180,
    minHeight: 150,
    marginLeft: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextTitle: {
    marginBottom: 15,
    // textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalText: {
    alignItems: "center",
  },
  modalTextComments: {
    marginTop: 15,
    textAlign: "center",
    width: 140,
  },
  image: {
    flex: 1,
    // justifyContent: "center",
  },
});

export default MyMatches;
