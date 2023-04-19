import { StyleSheet, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import PlayerMain from "./screens/PlayerMain";
import ClubMain from "./screens/ClubMain";
import AddFixtureModal from "./screens/AddFixtureModal";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="ClubMain" component={ClubMain} />
        <RootStack.Screen name="PlayerMain" component={PlayerMain} />
        <RootStack.Screen name="AddFixtureModal" component={AddFixtureModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
