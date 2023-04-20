import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import io from "socket.io-client";

import MatchList from "../components/MatchList";
import SignUpAlert from "../components/SignUpAlert";

const ClubMain = ({ navigation, alertMessage }) => {
  //const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Button
          title="Add a fixture"
          onPress={() => navigation.navigate("AddFixture")}
        />
      </View>
      <MatchList />
      {alertMessage !== "" ? <SignUpAlert /> : null}
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
