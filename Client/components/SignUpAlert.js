import React, { useState } from "react";
import { Modal, Text, View, Pressable, StyleSheet } from "react-native";

const SignUpAlert = ({ setAlertMessage }) => {
  const [alertVisible, setAlertVisible] = useState(true);

  const resetAlertMessage = () => {
    setAlertMessage(!alertMessage);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={alertVisible}
      onRequestClose={() => {
        setAlertVisible(!alertVisible);
        resetAlertMessage();
      }}
    >
      <Pressable
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        onPress={() => setAlertVisible(!alertVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>
              You Have a Player Confirmed! 🏉 Yayyy - your game can go ahead!
            </Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  modalTextTitle: {
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SignUpAlert;
