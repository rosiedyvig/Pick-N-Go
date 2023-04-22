import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Button from "../components/Button";
import Login from "../components/SignUp";
import SignUp from "../components/Login";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const logo = require("../assets/logo.png");
const grass = require("../assets/grass.avif");

const Home = ({ navigation }) => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  let [fontsLoaded] = useFonts({
    BarlowSemiBold: require("../assets/Barlow,Inter,Overpass/Barlow/Barlow-SemiBold.ttf"),
    BarlowRegular: require("../assets/Barlow,Inter,Overpass/Barlow/Barlow-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={grass}
      resizeMode="cover"
      style={styles.image}
      onLayout={onLayoutRootView}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={logo}></Image>
        <View style={styles.header}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            Keep the game alive with Pick N Go!{" "}
          </Text>
          <Text style={styles.text}>
            Connect with other clubs and help them fill their squad. Post a
            position or fixture that you need filled!
          </Text>
          <Text style={styles.text}>
            Say goodbye to cancelled fixtures and hello to more Rugby Sundays!
          </Text>
        </View>

        <View style={styles.buttoncontainer}>
          <Button
            title="Club"
            onPress={() => navigation.navigate("ClubMain")}
          />
          <Button
            title="Player"
            onPress={() => navigation.navigate("PlayerMain")}
          />
        </View>
        <View style={styles.buttoncontainer}>
          <Login setIsLoggedIn={setIsLoggedIn} />
          <SignUp />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  header: {
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    borderColor: "#9CCC67",
    borderWidth: 9,
    backgroundColor: "rgba(206, 245, 206, 0.91)",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    color: "black",
    paddingVertical: 10,

    // alignItems: "center",
    // justifyContent: "center",
    // alignSelf: "center",
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: "auto",
    height: 60,
    paddingBottom: 80,
  },
});

export default Home;
