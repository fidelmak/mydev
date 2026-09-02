import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { moderateScale, vs, s } from "react-native-size-matters";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Picker } from "@react-native-picker/picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";

const BalanceCard = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [modalVisible, setModalVisible] = useState(false);
  const OPTIONS = [
    { label: "Euro", value: "€" },
    { label: "US Dollars", value: "$" },
    { label: "Nigeria Naira", value: "₦" },
  ];
  const [selected, setSelected] = useState(OPTIONS[0]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Total Balance</Text>
      <Text style={styles.text2}> {selected.value}24,800,500</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <FontAwesome6 name="earth-europe" size={24} color="navy" />
        <View style={{ width: s(10) }} />
        <Text style={styles.text}>{selected.label}</Text>
        <View style={{ width: s(10) }} />
        <Ionicons
          onPress={() => setModalVisible(true)}
          name="chevron-down"
          size={20}
          color="navy"
        />
      </View>
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.dropdownList}>
            <FlatList
              data={OPTIONS}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setSelected(item);
                    setModalVisible(false);
                  }}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  dropdownButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    padding: 40,
  },
  dropdownList: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 8,
  },
  option: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  container: {
    marginTop: 30,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 400,
    justifyContent: "center",
    alignSelf: "center",
  },
  text2: {
    fontSize: moderateScale(42),
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  },
});
