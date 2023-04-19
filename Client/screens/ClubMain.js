import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";

import MatchList from "../components/MatchList";

const ClubMain = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Button
          title="Add a fixture"
          onPress={() => navigation.navigate("AddFixtureModal")}
        />
      </View>
      <MatchList />
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
