import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNum, setUserNum] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const handleRestartGame = () => {
    setUserNum(null);
    setGuessRounds(0);
  };

  const handleStartGame = (selectedNum) => {
    setUserNum(selectedNum);
  };

  const handleGameOver = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartScreen onStart={handleStartGame} />;

  if (userNum && guessRounds <= 0) {
    content = <GameScreen userChoice={userNum} onGameOver={handleGameOver} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        guessRounds={guessRounds}
        userNumber={userNum}
        onRestart={handleRestartGame}
      />
    );
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.screen}>
        <Header title="Guess a Number" />
        {content}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
