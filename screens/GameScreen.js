import React, { useState } from 'react'
import { StyleSheet, View, Text } from "react-native"

const genRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)  // rounded up
  max = Math.floor(max)

  const rndNum = Math.floor(Math.random() * (max - min)) + min
  if (rndNum === exclude) {
    return genRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

function GameScreen({ userChoice }) {
  const [guess, setGuess] = useState(genRandomBetween(1, 100, userChoice))

  return (
    <View>
      
    </View>
  )
}

const styles = StyleSheet.create({

})

export default GameScreen
