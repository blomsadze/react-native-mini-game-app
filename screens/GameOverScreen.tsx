import React, { FC, useMemo } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
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
  const { width, height } = useWindowDimensions();

  const imageSize = useMemo(() => {
    let imageSize = 300;

    if (width < 380) {
      imageSize = 150;
    }
    if (height < 400) {
      imageSize = 80;
    }

    return {
      width: imageSize,
      height: imageSize,
      borderRadius: imageSize / 2,
    };
  }, [width, height]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageSize]}>
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
    </ScrollView>
  );
};

export { GameOverScreen };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
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
