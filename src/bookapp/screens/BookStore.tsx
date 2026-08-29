import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { getBooks } from "../api/https";

const BookStore = () => {
  const [isLoading, setIsLoading] = useState();
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    getBooks({
      onSuccess: (books) => setBookList(books),
      onFailed: (error) => console.log(error),
    });
  }, []);

  console.log(bookList);

  return (
    <View style={styles.container}>
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookCard
            bookTitle={item.name_of_book}
            bookAuthor={item.name_of_author}
            bookPrice={item.price_of_books}
            bookImage={item.cover}
          />
        )}
      />
    </View>
  );
};

export default BookStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
});
