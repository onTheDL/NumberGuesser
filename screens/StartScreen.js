import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

export default function StartScreen() {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const handleNumInput = (inputText) => {
    setValue(inputText.replace(/[^0-9]/g, ""));
    setConfirmed(false)
  
  };
  const handleConfirm = () => {
    const chosenNumber = parseInt(value)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setValue('')
  }

  let confirmedOutput

  if (confirmed) {
    confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>

          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={handleNumInput}
            value={value}
          />

          <View style={styles.btnBox}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={() => {
                  setValue("");
                }}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={handleConfirm}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  btnBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});
