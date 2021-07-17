import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

export default function GameOverScreen({ guessRounds, userNumber, onRestart }) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
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
            marginVertical: Dimensions.get("window").height / 60,
          }}
        >
          <BodyText
            style={{
              textAlign: "center",
              fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
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
    paddingTop: "10%",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
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
