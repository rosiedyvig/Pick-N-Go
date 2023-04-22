import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect, useCallback } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import { postUser } from "../API";
import Button from "./Button";

const ball = require("../assets/ball.png");

const Login = ({ setIsLoggedin }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };

  const handleLogIn = () => {
    console.log("log in button has been pressed from within the modal");
    setIsLoggedin(true);
    console.log("please");
  };

  const login = "Log In!";

  //This should be hooked up with the handleLogIn function.
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const fakeFunction = useCallback(async () => {
    // const isThisaUser = { //i dont care what the password is because its fake
    //   name,
    //   password,
    // }

    findUser(name);
  });

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.tinyLogo} source={ball} />

            <View style={styles.InfoBox}>
              <Text style={styles.modalText}>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                placeholder="name"
                onChangeText={setName}
              />
              <Text style={styles.modalText}>Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                placeholder="password"
                onChangeText={setPassword}
              />
              <Button
                style={styles.button}
                title={login}
                onPress={() => {
                  handlePress();
                  handleLogIn();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Button title={login} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 12,
    marginHorizontal: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 5,
    // textAlign: "center",
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 15,
    width: 300,
  },
  // logoBox: {
  //   height: 200,
  //   borderWidth: 1,
  //   borderColor: "gray",
  // },
  tinyLogo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
});

export default Login;
