import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const genRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min); // rounded up
  max = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return genRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

function GameScreen({ userChoice }) {
  const [guess, setGuess] = useState(genRandomBetween(1, 100, userChoice));

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{guess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
