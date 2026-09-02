import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { vs } from "react-native-size-matters";

const Scan = () => {
  return (
    <View style={styles.container}>
      <Text>Scan</Text>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "lightgray",
    height: vs(100),
    marginTop: 20,
  },
});
