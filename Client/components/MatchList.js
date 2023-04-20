import React, { useCallback, useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import MatchBox from "./MatchBox";
import { getAll } from "../API";

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
    //fetch from the db again!
    console.log("inside the function");
    const eventsFromDb = await getAll();
    setMatches(eventsFromDb);
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={matchArr}
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
