import React, { useCallback, useState, useEffect } from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { getAll } from "../API";
import { useSelector } from "react-redux";
import MatchBox from "./MatchBox";
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

  const isClub = useSelector((s) => s.club);

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

  const oppositionArr = formattedFixtures.filter((x) => {
    return x.looking_for == "Opposition";
  });

  return (
    <SafeAreaView style={styles.container}>
      {isClub ? (
        <FlatList
          data={oppositionArr}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <MatchBox
              item={item}
              setAlertMessage={setAlertMessage}
              // matchArr={matchArr}
              // setMatches={setMatches}
            />
          )}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      ) : (
        <FlatList
          data={formattedFixtures}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <MatchBox
              item={item}
              setAlertMessage={setAlertMessage}
              // matchArr={matchArr}
              // setMatches={setMatches}
            />
          )}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MatchList;
