import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import Button from "../components/Button";

import MatchList from "../components/MatchList";
import SignUpAlert from "../components/SignUpAlert";

const ClubMain = ({ navigation, alertMessage, setAlertMessage }) => {
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
        <SignUpAlert setAlertMessage={setAlertMessage} />
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
