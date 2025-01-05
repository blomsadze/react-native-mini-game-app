import React, { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { PrimaryButton, Title } from "../components/ui";
import { Colors } from "../constants/colors";

type TGameOverScreenProps = {
  userNumber: string;
  onStartNewGame: () => void;
};

const GameOverScreen: FC<TGameOverScreenProps> = ({
  userNumber,
  onStartNewGame,
}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
    </View>
  );
};

export { GameOverScreen };

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
});
