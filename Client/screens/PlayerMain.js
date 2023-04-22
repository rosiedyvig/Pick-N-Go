import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

import MatchList from "../components/MatchList";

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
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default PlayerMain;
