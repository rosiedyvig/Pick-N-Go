import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import PlayerMain from "./screens/PlayerMain";
import ClubMain from "./screens/ClubMain";
import AddFixture from "./screens/AddFixture";
import io from "socket.io-client";

const RootStack = createStackNavigator();

export default function App() {
  const [socket, setSocket] = useState(null);
  const [alertMessage, setAlertMessage] = useState(false);

  useEffect(() => console.log("alert : ", alertMessage), [alertMessage]);

  useEffect(() => {
    if (socket) {
      socket.disconnect();
    }
    socketSetUp = io("http://192.168.0.211:3000");
    setSocket(socketSetUp);
    return () => {
      socketSetUp.disconnect();
    };
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="ClubMain"
          component={ClubMain}
          options={({ navigation }) => ({
            headerShown: true,
            params: {
              alertMessage,
              setAlertMessage,
            },
          })}
        />
        <RootStack.Screen name="PlayerMain">
          {() => <PlayerMain setAlertMessage={setAlertMessage} />}
        </RootStack.Screen>
        <RootStack.Screen name="AddFixture" component={AddFixture} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
