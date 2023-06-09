import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import Home from "./screens/Home";
import PlayerMain from "./screens/PlayerMain";
import ClubMain from "./screens/ClubMain";
import AddFixture from "./screens/AddFixture";
import MyMatches from "./screens/MyMatches";

import io from "socket.io-client";

const RootStack = createStackNavigator();

export default function App() {
  const [socket, setSocket] = useState(null);
  const [alertMessage, setAlertMessage] = useState(false);

  useEffect(() => console.log("alert : ", alertMessage));

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
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="ClubMain">
            {() => (
              <ClubMain
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
              />
            )}
          </RootStack.Screen>
          <RootStack.Screen name="PlayerMain">
            {() => <PlayerMain setAlertMessage={setAlertMessage} />}
          </RootStack.Screen>
          <RootStack.Screen name="AddFixture" component={AddFixture} />
          <RootStack.Screen name="MyMatches" component={MyMatches} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
