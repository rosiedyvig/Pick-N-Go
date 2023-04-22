import React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";

const images = [
  "https://images.squarespace-cdn.com/content/v1/5356f3fce4b0fe1121e2c6bb/e66e8d30-a87f-4b39-a9fe-e62fe1a9dbdf/_DSF0341.jpg?format=2500w",
  "https://img-res.pitchero.com/?url=images.pitchero.com%2Fui%2F1389171%2Fimage_5e22d980ecf90.png&h=720&w=1280&t=square&q=87&o=jpg",
  "https://images.squarespace-cdn.com/content/v1/5356f3fce4b0fe1121e2c6bb/1634052716648-EKHQBZPOZIWXYICU8F6U/_DSF2484.jpg?format=2500w",
  "https://res.cloudinary.com/dwh6m5mbn/image/upload/c_lfill,w_830/v1589446894/BMRC_Womens_Team_xxlrcn.jpg",
  "https://img-res.pitchero.com/?url=images.pitchero.com%2Fui%2F210363%2Fimage_61f82107a2a7b.jpg&h=1100&w=1960&t=fit&o=jpg",
  "https://resources.stuff.co.nz/content/dam/images/4/y/m/h/f/r/image.related.StuffLandscapeSixteenByNine.1420x800.4ymhgm.png/1590448280192.jpg?format=pjpg&optimize=medium",
];

const BackgroundCarousel = () => {
  return (
    <View style={{ height: 200 }}>
      <ScrollView horizontal pagingEnabled>
        {images.map((image, i) => (
          <Image
            style={styles.backgroundImage}
            source={{ uri: image }}
            key={i.toString()}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: Dimensions.get("window").width,
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10,
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff",
  },
});

export default BackgroundCarousel;
