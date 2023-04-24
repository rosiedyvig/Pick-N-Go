import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { findUser } from "../API";
import Button from "./Button";

const ball = require("../assets/ball.png");

const Login = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };

  const handleLogIn = async () => {
    if (name === "") {
      Alert.alert("Please fill in all your details");

      return;
    }
    const result = await findUser(name);
    if (result == null) {
      Alert.alert("User not found");
      setName("");
      return;
    }
    if (result.club === true) {
      navigation.navigate("ClubMain");
    }
    if (result.club === false) {
      navigation.navigate("PlayerMain");
    }
    setName("");
  };

  const login = "Log In!";

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
                    secureTextEntry={true}
                    placeholder="password"
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
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Modal>

      <Button title={login} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  tinyLogo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
});

export default Login;
