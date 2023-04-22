import React from "react";
import { Modal, Text, View, Pressable, StyleSheet } from "react-native";
import Button from "./Button";
import Map from "./Map";

const Details = ({ item, modalVisible, setModalVisible, setAlertMessage }) => {
  const handleSignUp = () => {
    setAlertMessage(true);
  };

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
            <View style={styles.row}>
              <View style={styles.modalText}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Meet Up: {item.meet_up}
                </Text>
                <Text>Kick Off: {item.kick_off}</Text>
                <Text>Location: {item.location}</Text>
                <Text style={styles.modalTextComments}>
                  We are looking for {item.looking_for}. {item.comments}
                </Text>
              </View>
              <View style={styles.map}>
                <Map item={item} />
              </View>
            </View>

            <Button title={"Sign Up"} onPress={handleSignUp}></Button>
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
  row: {
    flexDirection: "row",
    marginBottom: 10,
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
    shadowOpacity: 0.9,
    shadowRadius: 40,
    elevation: 15,
  },
  map: {
    width: 180,
    minHeight: 150,
    marginLeft: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  modalText: {
    alignItems: "center",
  },
  modalTextComments: {
    marginTop: 15,
    textAlign: "center",
    width: 140,
  },
});

export default Details;
