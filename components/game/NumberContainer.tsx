import React, { FC } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

type TNumberContainerProps = {
  children: React.ReactNode;
};

const NumberContainer: FC<TNumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export { NumberContainer };

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 24 : 36,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
