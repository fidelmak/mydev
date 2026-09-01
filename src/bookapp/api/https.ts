import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";

// we have callbacks , the functions that happens when api is success or failed 

const endpointUrl = "https://6a8f6426a12b7de8cc0f6dac.mockapi.io/Books";


  export  const  getBooks = async ({onSuccess, onFailed}) => {
    try{
const response = await axios.get(endpointUrl);

   onSuccess && onSuccess(response.data);
   
    }catch(error){
   onFailed && onFailed(error)
    }

    
    // triggers re-render, hides button
  };

  // this is a get request
 export  const getBookById = async ({onSuccess, onFailed},id) => {
    try {
      const response = await axios.get(`${endpointUrl}/${id}`);
        onSuccess && onSuccess(response.data);
    } catch (error) {
      onFailed && onFailed(error)
      throw error;
    }
  };
  // this is a delete request by id
  export const deleteBookById = async ({onSuccess, onFailed,id}) => {
    try {
      const response = await axios.delete(`${endpointUrl}/${id}`);
      Alert.alert("Book deleted successfully");
        onSuccess && onSuccess(response.data);
    } catch (error) {
        onFailed && onFailed(error)
    }
  };
  // this is a post request
  const body = {
    name_of_author: "Morgan Housel",
    cover:
      "https://i.pinimg.com/1200x/16/fa/c4/16fac462481d0e255ac8b6f9be5c3d88.jpg",
    price_of_books: "200.80",
  };
  export const createBook = async ({onSuccess, onFailed, body}) => {
    try {
      const response = await axios.post(endpointUrl, body);

      Alert.alert("Book has been created");
       onSuccess && onSuccess(response.data);
    } catch (error) {
        onFailed && onFailed(error)
    }
  };
export const updateBook = async ({onSuccess, onFailed,id,body}) => {
  try{
const response = await axios.put(`${endpointUrl}/${id}`,body);
 Alert.alert("Book has been updated");
   onSuccess && onSuccess(response.data);
  }catch (error){
       onFailed && onFailed(error)

  }
}