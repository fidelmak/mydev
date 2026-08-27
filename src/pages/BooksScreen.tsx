import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { moderateScale, s, vs } from "react-native-size-matters";
import AddButton from "../components/AddButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const BooksScreen = () => {
  const endpointUrl = "https://6a8f6426a12b7de8cc0f6dac.mockapi.io/Books";
  const [isLoading, setIsLoading] = useState(false);
  const [bookList, setBookList] = useState([]);

  const getBooks = async () => {
    const response = await axios.get(endpointUrl);
    setBookList(response.data);
    setIsLoading(true); // triggers re-render, hides button
  };

  // this is a get request
  const getBookById = async (id) => {
    try {
      const response = await axios.get(`${endpointUrl}/${id}`);
    } catch (error) {
      console.error(`Failed to fetch book ${id}:`);
      throw error;
    }
  };
  // this is a delete request by id
  const deleteBookById = async (id) => {
    try {
      const response = await axios.delete(`${endpointUrl}/${id}`);
      Alert.alert("Book deleted successfully");
      getBooks();
    } catch (error) {}
  };
  // this is a post request
  const body = {
    name_of_author: "Morgan Housel",
    cover:
      "https://i.pinimg.com/1200x/16/fa/c4/16fac462481d0e255ac8b6f9be5c3d88.jpg",
    price_of_books: "200.80",
  };
  const createBook = async () => {
    try {
      const response = await axios.post(endpointUrl, body);

      Alert.alert("Book has been created");
      getBooks();
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(JSON.stringify(response.data, null,3 ))

  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}>
        <Text style={styles.text}>
          Lists of Available Books {bookList.length}
        </Text>
        <View style={{ height: s(12) }} />
        <Button
          onPress={() => {
            createBook();
          }}
          title="Add a Book"
          color="green"
        />
      </View>
      <View style={{ height: s(34) }} />

      {!isLoading ? <Button onPress={getBooks} title="GET BOOKS" /> : <View />}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={bookList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: s(6),
            }}
          >
            <View
              style={{ justifyContent: "center", alignItems: "flex-start" }}
            >
              <Image
                style={{
                  width: 300,
                  height: 280,
                  borderRadius: 24,
                  borderWidth: 1,
                }}
                source={{ uri: item.cover }}
              />
              <View style={{ height: s(12) }} />
              <View>
                <Text style={styles.textPrice}>${item.price_of_books}</Text>
                <View style={{ height: s(12) }} />
                <Text style={styles.text}>{item.name_of_author}</Text>
                <View style={{ height: s(12) }} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  onPress={() => {
                    getBookById(item.id);
                  }}
                  title="Buy"
                  color="green"
                />
                <View style={{ width: s(30) }} />
                <MaterialCommunityIcons
                  onPress={() => deleteBookById(item.id)}
                  name="delete-alert-outline"
                  size={24}
                  color="red"
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BooksScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(50),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: moderateScale(16),
  },
  textPrice: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
  },
});
