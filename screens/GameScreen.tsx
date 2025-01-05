import React, { FC, useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { PrimaryButton, Title, Card, InstructionText } from "../components/ui";
import { NumberContainer } from "../components/game";
import { generateRandomNumber } from "../utils/generateRandomNumber";
import { Direction } from "../enums";

type TGameScreenProps = {
  userNumber: string;
  onGameOver: () => void;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: FC<TGameScreenProps> = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 100, Number(userNumber));

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: Direction) => {
    if (
      (direction === Direction.Lower && currentGuess < userNumber) ||
      (direction === Direction.Greater && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => {
                nextGuessHandler(Direction.Lower);
              }}
            >
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => {
                nextGuessHandler(Direction.Greater);
              }}
            >
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export { GameScreen };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  buttonContainer: {
    flex: 1,
  },
});
