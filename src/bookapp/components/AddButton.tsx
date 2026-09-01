import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Entypo name="plus" size={42} color="#25e" />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
