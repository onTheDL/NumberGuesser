import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import DefaultStyles from "../constants/default-styles";
import BodyText from "../components/BodyText";

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

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

function GameScreen({ userChoice, onGameOver }) {
  const initialGuess = genRandomBetween(1, 100, userChoice);
  const [currentGuess, setGuess] = useState(initialGuess);
  const [prevGuesses, setPrevGuesses] = useState([initialGuess.toString()]);

  // useRef preserves values across re-renders
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(prevGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert(
        "Oops!",
        "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.  - Nietzche",
        [{ text: "Sorry!", style: "cancel" }]
      );
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = genRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setGuess(nextNumber);
    // setRounds((prev) => prev + 1);
    setPrevGuesses((curState) => [nextNumber.toString(), ...curState]);
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <MainButton
          onPress={() => {
            handleNextGuess("lower");
          }}
        >
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton
          onPress={() => {
            handleNextGuess("greater");
          }}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {prevGuesses.map((guess, index) =>
            renderListItem(guess, prevGuesses.length - index)
          )}
        </ScrollView> */}

        <FlatList
          keyExtractor={(item) => item}
          data={prevGuesses}
          renderItem={renderListItem.bind(this, prevGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
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
    width: 400,
    maxWidth: "90%",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  listContainer: {
    width: "60%",
    flex: 1,
  },
  list: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default GameScreen;
