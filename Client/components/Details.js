import React, { useState } from "react";
import { Modal, Text, View, Pressable } from "react-native";
import Button from "./Button";
import Map from "./Map";
import PopUp from "./PopUp";
import styles from "./Details.style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setConfirmedFixture } from "../redux/confirmedFixturesSlice";

const Details = ({ item, modalVisible, setModalVisible, setAlertMessage }) => {
  const [isConfirmed, setConfirmed] = useState(false);

  const isClub = useSelector((s) => s.club);

  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(setConfirmedFixture(item));
    setAlertMessage(true);
    setConfirmed(true);
    //this should be deleted from the matchArr now using setMatches
    //re render the list
    //delete from db is avalible if needed - deleteMatchfromDB
    //add the match to the MyMatches screen
    setTimeout(() => {
      setModalVisible(!modalVisible);
      setConfirmed(false);
      // const newArr = matchArr.filter(
      //   (individual) => individual._id !== item._id
      // );
      // setMatches(newArr);

      //send this item to myMatches
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

            {isClub ? null : (
              <Button title={"Sign Up"} onPress={handleSignUp}></Button>
            )}
          </View>
          {isConfirmed ? (
            <PopUp
              text={
                "Confirmed! Now get your boots on, its time to save the day!"
              }
              name={isUserName}
            ></PopUp>
          ) : null}
        </View>
      </Pressable>
    </Modal>
  );
};

export default Details;
