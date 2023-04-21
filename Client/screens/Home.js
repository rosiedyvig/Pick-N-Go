import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import Map from "../components/Map/Map";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Are You A Club or a Player?</Text>
      </View>

      <View style={styles.buttoncontainer}>
        <Button title="Club" onPress={() => navigation.navigate("ClubMain")} />
        <Button
          title="Player"
          onPress={() => navigation.navigate("PlayerMain")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  header: {
    marginTop: 150,
    backgroundColor: "red", //TO BE DELETED
    alignItems: "center",
    paddingVertical: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Home;
