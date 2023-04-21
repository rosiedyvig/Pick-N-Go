import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { getLongLat } from "../../API";

export default function Map({ item }) {
  //   const [islongitude, setLongitude] = useState("1.13151");
  //   const [isLatitude, setLatitude] = useState("51.8413");

  //   useEffect(() => {
  //     const getpostcode = async () => {
  //       const answer = await getLongLat("CO16 9EG");
  //       if (answer) {
  //         setLongitude(answer.longitude);
  //         setLatitude(answer.latitude);
  //       }
  //     };
  //     getpostcode();
  //   }, []);
  console.log(item);
  // const latitude = { item.latitude };
  // const longitude

  return (
    <>
      <Text>
        {item.location} {item.latitude}
      </Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: "51.8413",
          longitude: "1.13151",
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: "51.8413",
            longitude: "1.13151",
          }}
        />
      </MapView>
    </>
  );
}
