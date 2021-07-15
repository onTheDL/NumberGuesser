import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

export default function MainButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 12,
  },
  btnText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
