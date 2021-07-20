import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation'

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

export default function GameOverScreen({ guessRounds, userNumber, onRestart }) {
  const [availDeviceWidth, setAvailDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availDeviceHeight, setAvailDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailDeviceHeight(Dimensions.get("window").height);
      setAvailDeviceWidth(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              width: availDeviceWidth * 0.7,
              height: availDeviceWidth * 0.7,
              borderRadius: (availDeviceWidth * 0.7) / 2,
              marginVertical: availDeviceHeight / 30,
            },
          }}
        >
          <Image
            fadeDuration={800}
            source={require("../assets/success.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            marginHorizontal: 30,
            marginVertical: availDeviceHeight / 60,
          }}
        >
          <BodyText
            style={{
              textAlign: "center",
              fontSize: availDeviceHeight < 400 ? 16 : 20,
            }}
          >
            Your phone needed{" "}
            <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </BodyText>
        </View>

        <MainButton onPress={onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});
