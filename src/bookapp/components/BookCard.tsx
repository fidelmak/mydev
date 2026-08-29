import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const BookCard = ({ bookTitle, bookAuthor, bookPrice, bookImage }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: bookImage,
        }}
        style={styles.image}
      />
      {/* this is the view for the details */}
      <View style={styles.details}>
        <Text style={styles.bookName}>{bookTitle}</Text>
        <Text style={styles.bookAuthor}>{bookAuthor}</Text>
        <Text style={styles.bookPrice}>{bookPrice}</Text>
      </View>
      <View style={styles.editDeleteButton}>
        <TouchableOpacity style={styles.circleButton}>
          <MaterialIcons name="delete" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton}>
          <AntDesign name="edit" size={20} color="#25a" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  circleButton: {
    height: 35,
    width: 35,
    borderRadius: 25,
    backgroundColor: "#eee",
    marginStart: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  editDeleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookPrice: {
    fontSize: 16,
    color: "#25a",
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: 14,
    color: "#888",
    marginVertical: 3,
  },
  bookName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  container: {
    flexDirection: "row",

    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  image: {
    height: 120,
    width: "25%",
    borderRadius: 8,
    resizeMode: "stretch",
  },
});
