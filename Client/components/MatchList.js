import React, { useCallback, useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import MatchBox from "./MatchBox";
import { getAll } from "../API";
import moment from "moment";

const MatchList = ({ setAlertMessage }) => {
  const [matchArr, setMatches] = useState([]);
  const [isRefreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const getAllMatches = async () => {
      const eventsFromDb = await getAll();
      setMatches(eventsFromDb);
    };
    getAllMatches();
  }, []);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    const eventsFromDb = await getAll();
    setMatches(eventsFromDb);
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  }, []);

  const formattedFixtures = matchArr
    .filter((x) => moment(x.date).isAfter())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((item) => {
      const formateddate = moment(item.date).format("ddd Do MMM");
      const formatedKickOff = moment(item.kick_off).format("h:mm a");
      const formatedMeetUp = moment(item.meet_up).format("h:mm a");

      const formattedFixture = {
        ...item,
        date: formateddate,
        kick_off: formatedKickOff,
        meet_up: formatedMeetUp,
      };
      return formattedFixture;
    });

  return (
    <View style={styles.container}>
      <FlatList
        data={formattedFixtures}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <MatchBox item={item} setAlertMessage={setAlertMessage} />
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    flex: 3,
  },
});

export default MatchList;
