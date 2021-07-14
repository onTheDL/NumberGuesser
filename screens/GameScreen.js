import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import DefaultStyles from "../constants/default-styles"

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


function GameScreen({ userChoice, onGameOver }) {
  const [currentGuess, setGuess] = useState(
    genRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0)

  // useRef preserves values across re-renders
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds)
    }
  }, [currentGuess, userChoice, onGameOver])

  

  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Oops!",
        "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.  - Nietzche",
        [{ text: "Sorry!", style: "cancel" }]
      );
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }
    const nextNumber = genRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setGuess(nextNumber)
    setRounds(prev => prev + 1)
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button
          title="LOWER"
          onPress={() => {
            handleNextGuess("lower");
          }}
        />
        <Button
          title="GREATER"
          onPress={() => {
            handleNextGuess("greater");
          }}
        />
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
