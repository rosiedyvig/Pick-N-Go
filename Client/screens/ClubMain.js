import React from "react";
import { View, Button } from "react-native";

import MatchList from "../components/MatchList";

const ClubMain = ({ navigation }) => {
  return (
    <>
      <View>
        <Button
          title="Add a fixture"
          onPress={() => navigation.navigate("AddFixtureModal")}
        />
      </View>
      <MatchList />
    </>
  );
};

export default ClubMain;
