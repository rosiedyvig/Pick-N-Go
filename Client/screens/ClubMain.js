import React, { useContext } from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

import MatchList from "../components/MatchList";
import SignUpAlert from "../components/SignUpAlert";
import { ClubContext } from "../ClubContext";

const grass = require("../assets/grass.avif");

const ClubMain = ({ alertMessage, setAlertMessage }) => {
  const value = React.useContext(ClubContext);

  const navigation = useNavigation();
  return (
    <>
      <ImageBackground source={grass} resizeMode="cover" style={styles.image}>
        <Button
          title="Add a fixture"
          onPress={() => navigation.navigate("AddFixture")}
        />
        <MatchList />
      </ImageBackground>
      {alertMessage === true ? (
        <SignUpAlert
          text={
            "You Have a Player Confirmed! 🏉 Yayyy - your game can go ahead!"
          }
          setAlertMessage={setAlertMessage}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ClubMain;
