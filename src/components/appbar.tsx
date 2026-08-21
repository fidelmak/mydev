import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale,vs,s } from 'react-native-size-matters';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const AppBar = () => {
  return (
    <View style={styles.appbar}>
        <TouchableOpacity style={styles.circle}>
            <AntDesign name="arrow-left" size={12} color="black" />
        </TouchableOpacity>
      <Text style={styles.text}>Time Stack </Text>
       <TouchableOpacity style={styles.circle}>
            <Feather name="edit-2" size={14} color="black" />
        </TouchableOpacity>
    </View>
  )
}

const styles =  StyleSheet.create({
    appbar: {

  
 
  marginTop: vs(40),
  justifyContent: 'space-between',

  alignItems: 'center',
  marginBottom: s(20),

  flexDirection: 'row',

},
    text:{
        color: 'white',
        fontSize: 20,
        fontWeight: '200',
        marginLeft: 10,
       textAlign: 'center',
     
    },
    circle:{
        width: s(40),
        height: s(40),
        borderRadius: s(20),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default AppBar