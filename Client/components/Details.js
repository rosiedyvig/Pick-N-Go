import React from "react";
import { Modal, Text, View, Pressable, StyleSheet } from "react-native";
import Button from "./Button";

const Details = ({ item, modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Pressable
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>{item.name} need you!</Text>
            <View style={styles.info}>
              <Text style={styles.modalText}>Meet Up: {item.meet_up}</Text>
              <Text style={styles.modalText}>Kick Off: {item.kick_off}</Text>
              <Text style={styles.modalText}>Location: {item.location}</Text>
            </View>
            <Text style={styles.modalTextComments}>
              We are looking for {item.looking_for}. {item.comments}
            </Text>
            <Button
              title={"Sign Up"}
              onPress={() => {
                console.log("signed up");
              }}
            ></Button>
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

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextTitle: {
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  modalText: {
    marginBottom: 2,
  },
  modalTextComments: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 14,
  },
});

export default Details;
