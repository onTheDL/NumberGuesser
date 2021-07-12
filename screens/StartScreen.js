import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Card from "../components/Card"

export default function StartScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.btnBox}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  btnBox: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },

});
