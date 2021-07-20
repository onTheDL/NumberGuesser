import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../constants/colors";

export default function MainButton(props) {
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.btnContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  btnText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
