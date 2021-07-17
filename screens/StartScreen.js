import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

export default function StartScreen({ onStart }) {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleNumInput = (inputText) => {
    setValue(inputText.replace(/[^0-9]/g, ""));
    setConfirmed(false);
  };
  const handleConfirm = () => {
    const chosenNumber = parseInt(value);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Input must be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: () => setValue("") },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected:</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => onStart(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>

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
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
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
    // width: 100,
    width: Dimensions.get('window').width / 4,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  // text: {
  //   fontFamily: "open-sans",
  // }
});
