import { StyleSheet, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import PlayerMain from "./screens/PlayerMain";
import ClubMain from "./screens/ClubMain";
import AddFixture from "./screens/AddFixture";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="ClubMain" component={ClubMain} />
        <RootStack.Screen name="PlayerMain" component={PlayerMain} />
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
