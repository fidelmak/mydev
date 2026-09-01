import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const HomeApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <Pressable
        onPress={() => setCounter(counter + 1)}
        style={{
          padding: 10,
          width: 200,
          borderRadius: 25,
          height: 40,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>ADD</Text>
      </Pressable>
    </View>
  );
};

export default HomeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
