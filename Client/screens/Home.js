import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Are You A Club or a Player?</Text>

      <View style={styles.container}>
        <Button title="Club" onPress={() => navigation.navigate("ClubMain")} />
        <Button
          title="Player"
          onPress={() => navigation.navigate("PlayerMain")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Home;
