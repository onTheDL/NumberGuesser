import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from "../constants/colors"

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    padding: 10,
    borderRadius: 10,
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  }
})