import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DataScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DataScreen</Text>
    </View>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
