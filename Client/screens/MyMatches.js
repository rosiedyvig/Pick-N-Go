import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Button from "../components/Button";

const title = "See the matches you have signed up for";

const MyMatches = () => {
  const handlePress = () => {
    console.log("add stuff");
  };

  return (
    <View>
      <Button title={title} onPress={handlePress} />
    </View>
  );
};

export default MyMatches;
