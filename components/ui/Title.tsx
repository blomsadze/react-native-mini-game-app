import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";

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
    borderWidth: 2,
    borderColor: "#ffffff",
    padding: 12,
  },
});
