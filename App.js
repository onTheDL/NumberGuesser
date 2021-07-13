import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNum, setUserNum] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const handleRestartGame = () => {
    setUserNum(null)
    setGuessRounds(0)
  }

  const handleStartGame = (selectedNum) => {
    setUserNum(selectedNum);
  };

  const handleGameOver = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartScreen onStart={handleStartGame} />;

  if (userNum && guessRounds <= 0) {
    content = <GameScreen userChoice={userNum} onGameOver={handleGameOver} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen guessRounds={guessRounds} userNumber={userNum} onRestart={handleRestartGame} />
  }


  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
