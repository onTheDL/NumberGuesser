import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function TitleText(props) {
  return (
    <Text style={{...styles.text, ...props.style}}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
    marginBottom: 15,
    fontSize: 18
  }
})
