import React, { useState, FC } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { PrimaryButton, Title, Card, InstructionText } from "../components/ui";
import { Colors } from "../constants/colors";

type TStartGameScreenProps = {
  onPickNumber: (number: number) => void;
};

const StartGameScreen: FC<TStartGameScreenProps> = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { height } = useWindowDimensions();

  const numberInputHandler = (inputText: string) => {
    setEnteredNumber(inputText);
  };

  const resetHandler = () => {
    setEnteredNumber("");
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export { StartGameScreen };

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },
  numberInput: {
    minHeight: 70,
    fontSize: 32,
    width: 50,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
