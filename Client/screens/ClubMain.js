import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import io from "socket.io-client";

import MatchList from "../components/MatchList";

const ClubMain = ({ navigation }) => {
  // const componentDidMount = () => {
  //   const socket = io("http://192.168.0.211:3000");
  // };

  useEffect(() => {
    const socket = io("http://192.168.0.211:3000");
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Button
          title="Add a fixture"
          onPress={() => navigation.navigate("AddFixture")}
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
