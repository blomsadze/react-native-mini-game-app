import React, { FC } from "react";
import { Platform, StyleSheet, Text } from "react-native";

type TTitleProps = {
  children: React.ReactNode;
};

const Title: FC<TTitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export { Title };

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    // borderWidth: Platform.OS === "ios" ? 0 : 2,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "#ffffff",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
