import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";

type TCardProps = {
  children: React.ReactNode;
};

const Card: FC<TCardProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export { Card };

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});