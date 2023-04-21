import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

import MatchList from "../components/MatchList";
import SignUpAlert from "../components/SignUpAlert";

const ClubMain = ({ alertMessage, setAlertMessage }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Button
          title="Add a fixture"
          onPress={() => navigation.navigate("AddFixture")}
        />
      </View>
      <MatchList />
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
  container: {},
  button: {
    padding: 10,
    flex: 1,
  },
});

export default ClubMain;
