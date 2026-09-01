import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ContinueBtn = ({ onPress, message }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.test}>{message}</Text>
    </TouchableOpacity>
  );
};

export default ContinueBtn;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: "#25a",
    marginHorizontal: 12,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  test: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
