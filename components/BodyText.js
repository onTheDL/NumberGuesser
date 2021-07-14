import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function BodyText(props) {
  return (
    <Text style={{...styles.text, ...props.style}}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans"
  }
})
