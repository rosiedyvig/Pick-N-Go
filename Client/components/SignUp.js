import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  View,
} from "react-native";
import Button from "./Button";
import { CheckBox } from "@rneui/themed";

const SignUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isClub, setisClub] = useState(true);
  const [isPlayer, setisPlayer] = useState(false);

  const handlePress = () => {
    setModalVisible(!modalVisible);
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
          <View style={styles.modalView}>
            <View style={styles.logoBox} />
            <Text>Are You a club or a player?</Text>
            <View style={styles.checkboxBox}>
              <CheckBox
                // center
                title="Club"
                checked={isClub}
                onPress={() => {
                  setisClub(!isClub);
                  setisPlayer(!isPlayer);
                }}
              />
              <CheckBox
                // center
                title="Player"
                checked={isPlayer}
                onPress={() => {
                  setisPlayer(!isPlayer);
                  setisClub(!isClub);
                }}
              />
            </View>
            <View style={styles.InfoBox}>
              <Text style={styles.modalText}>Name</Text>
              <TextInput
                style={styles.input}
                // value={comments}
                placeholder="name"
                // onChangeText={setComments}
              />
              <Text style={styles.modalText}>Password</Text>
              <TextInput
                style={styles.input}
                // value={comments}
                placeholder="password"
                // onChangeText={setComments}
              />
              <Button
                style={styles.button}
                title={login}
                onPress={handlePress}
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
    height: 200,
    borderWidth: 1,
    borderColor: "gray",
  },
  checkboxBox: {
    flexDirection: "row",
  },
});

export default SignUp;
