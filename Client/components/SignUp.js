import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import Button from "./Button";
import SignUpAlert from "./SignUpAlert";
import { CheckBox } from "@rneui/themed";
import { postUser } from "../API";

const ball = require("../assets/ball.png");

const SignUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [club, setisClub] = useState(true);
  // const [isPlayer, setisPlayer] = useState(false);
  // const [isSignedUp, setSignUpMessage] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };

  const handleSignUpPress = () => {
    // this works the first time but not again. I need to reset the alert message back to ! which is done in the sign up module.
    //setIsPressed(!isPressed);
    // setTimeout(() => {
    //   setModalVisible(!modalVisible);
    // }, 1300);

    setModalVisible(!modalVisible);
    const newUser = {
      club,
      name,
      password,
    };

    postUser(newUser);

    setName("");
    setPassword("");
  };

  const login = "Sign Up!";

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
          <ScrollView automaticallyAdjustContentInsets={true}>
            <View style={styles.modalView}>
              <View style={styles.logoBox}>
                <Image style={styles.tinyLogo} source={ball} />
                <Text style={{ fontSize: 18 }}>Sign Up below: </Text>
              </View>
              <Text>Are You a club or a player?</Text>
              <View style={styles.checkboxBox}>
                <CheckBox
                  // center
                  title="Club"
                  checked={club}
                  onPress={() => {
                    setisClub(!club);
                  }}
                />
                <CheckBox
                  // center
                  title="Player"
                  checked={!club}
                  onPress={() => {
                    setisClub(!club);
                  }}
                />
              </View>
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
                  onPress={handleSignUpPress}
                />
                {isPressed === true ? (
                  <SignUpAlert
                    text={"You have Signed Up!! Congratulations 👏"}
                    setAlertMessage={setSignUpMessage}
                  />
                ) : null}
              </View>
            </View>
          </ScrollView>
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
    marginTop: 170,
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center",
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
  logoBox: {
    marginBottom: 20,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxBox: {
    flexDirection: "row",
  },
  tinyLogo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  // container: {
  //   flex: 1,
  // },
});

export default SignUp;
