import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import BalanceCard from "../components/Balance";
import { vs } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";
import Scan from "../components/Scan";

const DataScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <BalanceCard />
      {/* section 2  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: vs(20),
          paddingHorizontal: 20,
        }}
      >
        <Text>Todo</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>View All</Text>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </View>
      {/* section 3 */}
      <Scan />
    </View>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
