import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MatchBox = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>
        {item.name} {item.location}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffdd0",
    margin: 10,
    padding: 10,
    borderColor: "blue",
    borderWidth: 2,
  },
});

export default MatchBox;
