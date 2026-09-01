import { View, Text, StyleSheet, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppTextInput from "../components/AppTextInput";
import ContinueBtn from "../components/ContinueBtn";
import { createBook, updateBook } from "../api/https";

const AddBookScreen = ({
  onCloseIconPress,
  onCreateBookSuccess,
  onSelectedItems,
}) => {
  const [bookName, setBookName] = useState(onSelectedItems?.name_of_book ?? "");
  const [bookAuthor, setBookAuthor] = useState(
    onSelectedItems?.name_of_author ?? "",
  );
  const [bookPrice, setBookPrice] = useState(
    onSelectedItems?.price_of_books ?? "",
  );
  const [bookCover, setBookCover] = useState(onSelectedItems?.cover ?? "");
  console.log("onSelectedItems ", onSelectedItems);

  const onCreateBook = () => {
    createBook({
      body: {
        name_of_book: bookName,
        name_of_author: bookAuthor,
        cover: bookCover,
        price_of_books: bookPrice,
      },
      onSuccess: () => {
        onCloseIconPress();
        onCreateBookSuccess();
      },
      onFailed: (error) => {
        Alert.alert("Failed to create book ");
      },
    });
  };

  const editBook = () => {
    updateBook({
      id: onSelectedItems.id,
      body: {
        name_of_book: bookName,
        name_of_author: bookAuthor,
        cover: bookCover,
        price_of_books: bookPrice,
      },
      onSuccess: () => {
        onCloseIconPress();
        onCreateBookSuccess();
      },
      onFailed: (error) => {
        Alert.alert("Failed to create book ");
      },
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Ionicons
          name="close-circle"
          size={42}
          color="#b80000"
          onPress={onCloseIconPress}
        />
        <View style={styles.body}>
          <Text style={styles.text}>Book Details </Text>
          <AppTextInput
            placeHolder={"Book Name"}
            cursorColor="grey"
            value={bookName}
            onChnageText={setBookName}
            keyBoardType="default"
          />
          <AppTextInput
            placeHolder={"Book Author"}
            cursorColor="grey"
            value={bookAuthor}
            onChnageText={setBookAuthor}
            keyBoardType="default"
          />
          <AppTextInput
            placeHolder={"Book Price"}
            cursorColor="grey"
            value={bookPrice}
            onChnageText={setBookPrice}
            keyBoardType="phone-pad"
          />
          <AppTextInput
            placeHolder={"Book Cover "}
            cursorColor="grey"
            value={bookCover}
            onChnageText={setBookCover}
            keyBoardType="default"
          />
          <ContinueBtn
            onPress={!!onSelectedItems ? editBook : onCreateBook}
            message={!!onSelectedItems ? "Update Book" : "Create Book"}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AddBookScreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 18,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
});
