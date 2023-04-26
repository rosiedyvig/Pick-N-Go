import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MatchList from "../components/MatchList";
import Button from "../components/Button";
const grass = require("../assets/grass.avif");

const PlayerMain = ({ setAlertMessage }) => {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground source={grass} resizeMode="cover" style={styles.image}>
        <Button
          title="Confirmed Fixtures"
          onPress={() => navigation.navigate("MyMatches")}
        />

        <MatchList setAlertMessage={setAlertMessage} />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default PlayerMain;
