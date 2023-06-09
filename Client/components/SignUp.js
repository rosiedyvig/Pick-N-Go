import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import Button from "./Button";
import PopUp from "./PopUp";
import { CheckBox } from "@rneui/themed";
import { postUser } from "../API";
import { useSelector, useDispatch } from "react-redux";
import { toggle, setClub } from "../redux/clubSlice";

const ball = require("../assets/ball.png");

const SignUp = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const club = useSelector((state) => state.club);

  const [isSignedUp, setSignedUp] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };

  const handleSignUpPress = () => {
    if (name === "") {
      Alert.alert("Please fill in all your details");
      return;
    }
    setSignedUp(true);
    setTimeout(() => {
      setSignedUp(false);
    }, 2500);

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
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.modalView}>
                <View style={styles.logoBox}>
                  <Image style={styles.tinyLogo} source={ball} />
                  <Text style={{ fontSize: 18 }}>Sign Up below: </Text>
                </View>
                <Text>Are You a club or a player?</Text>
                <View style={styles.checkboxBox}>
                  <CheckBox
                    title="Club"
                    checked={club}
                    onPress={() => {
                      dispatch(setClub(true));
                    }}
                  />
                  <CheckBox
                    title="Player"
                    checked={!club}
                    onPress={() => {
                      dispatch(setClub(false));
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
                    secureTextEntry={true}
                    value={password}
                    placeholder="password"
                    onChangeText={setPassword}
                  />
                  <Button
                    style={styles.button}
                    title={login}
                    onPress={handleSignUpPress}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Button title={login} onPress={handlePress} />
      {isSignedUp === true ? (
        <PopUp text={"You have Signed Up 👏 Now log in to find a match!"} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  contaniner: {
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
});

export default SignUp;
