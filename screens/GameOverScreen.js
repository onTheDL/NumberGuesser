import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function GameOverScreen({ guessRounds, userNumber, onRestart }) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {guessRounds}</Text>
      <Text>Number chosen: {userNumber}</Text>
      <Button title='Restart' onPress={onRestart} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})