import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";
import TitleText from "./TitleText";

export default function Header({ title }) {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  title: {
    color: Platform.OS === "android" ? "white" : Colors.primary,
  },
});
