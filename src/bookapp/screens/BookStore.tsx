import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { deleteBookById, getBooks } from "../api/https";
import AddButton from "../components/AddButton";
import AddBookScreen from "./AddBookScreen";

const BookStore = () => {
  const [isLoading, setIsLoading] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [bookList, setBookList] = useState([]);
  const [selectedItems, setSelectedItems] = useState(null);
  const getBookListFn = () => {
    getBooks({
      onSuccess: (books) => setBookList(books),
      onFailed: (error) => console.log(error),
    });
  };
  useEffect(() => {
    getBookListFn();
  }, []);

  const onDeleteItem = (item) => {
    deleteBookById({
      onSuccess: () => getBookListFn(),
      onFailed: (error) => console.log(error),
      id: item.id,
    });
  };
  const onEdit = (item) => {
    setModalVisible(true);
    setSelectedItems(item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookCard
            bookTitle={item.name_of_book}
            bookAuthor={item.name_of_author}
            bookPrice={`$${item.price_of_books}`}
            bookImage={item.cover}
            onDeleteItem={() => onDeleteItem(item)}
            onEditItem={() => {
              onEdit(item);
            }}
          />
        )}
      />
      <AddButton
        onPress={() => {
          setModalVisible(true);
          setSelectedItems(null);
        }}
      />
      <Modal visible={modalVisible}>
        <AddBookScreen
          onCloseIconPress={() => setModalVisible(false)}
          onCreateBookSuccess={() => getBookListFn()}
          onSelectedItems={selectedItems}
        />
      </Modal>
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
