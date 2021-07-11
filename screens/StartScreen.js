import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function StartScreen() {
  return (
    <View style={styles.screen}>
      <Text>The Game Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})