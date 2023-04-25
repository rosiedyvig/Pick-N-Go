import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

import MatchList from "../components/MatchList";
import MyMatches from "./MyMatches";
const grass = require("../assets/grass.avif");

const PlayerMain = ({ setAlertMessage }) => {
  return (
    <>
      <ImageBackground source={grass} resizeMode="cover" style={styles.image}>
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
