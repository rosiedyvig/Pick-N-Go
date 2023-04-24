import React, { useState } from "react";
import { Modal, Text, View, Pressable } from "react-native";
import Button from "./Button";
import Map from "./Map";
import PopUp from "./PopUp";
import styles from "./Details.style";

const Details = ({ item, modalVisible, setModalVisible, setAlertMessage }) => {
  const [isConfirmed, setConfirmed] = useState(false);

  const handleSignUp = () => {
    setAlertMessage(true);
    setConfirmed(true);
    setTimeout(() => {
      setModalVisible(!modalVisible);
      setConfirmed(false);
    }, 2500);
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
              <Pressable onPress={() => {}}>
                <View style={styles.map}>
                  <Map item={item} />
                </View>
              </Pressable>
            </View>

            <Button title={"Sign Up"} onPress={handleSignUp}></Button>
          </View>
          {isConfirmed ? (
            <PopUp
              text={
                "Confirmed! Now get your boots on, its time to save the day!"
              }
            ></PopUp>
          ) : null}
        </View>
      </Pressable>
    </Modal>
  );
};

export default Details;
