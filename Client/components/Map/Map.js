import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { getLongLat } from "../../API";

export default function Map({ item }) {
  const [islongitude, setLongitude] = useState(-1.8750719710745756);
  const [isLatitude, setLatitude] = useState(52.42804493390467);

  useEffect(() => {
    const getpostcode = async () => {
      const answer = await getLongLat("CO16 9EG");
      setLongitude(answer.longitude);
      setLatitude(answer.latitude);
    };
    getpostcode();
  }, [islongitude, isLatitude]);

  const dfhdh = {
    latitude: "51.8413",
    longitude: "1.13151",
  };

  return (
    <>
      <Text>{item.location}</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: isLatitude,
          longitude: islongitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: isLatitude,
            longitude: islongitude,
          }}
        />
      </MapView>
    </>
  );
}
