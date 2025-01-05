import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

type TInstructionTextProps = {
  children: string;
};

const InstructionText: FC<TInstructionTextProps> = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export { InstructionText };

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
