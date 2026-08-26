import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { grey } from '../../constants/colors'
import { vs ,s} from 'react-native-size-matters'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
<FontAwesome6 name="add" size={24} color="#FF7622" />
<View style={{width:s(10)}}/>
      <Text style={{color:"#FF7622"}}>Add Card</Text>
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        alignItems:"center",
        borderColor:"#F7C9AC" ,
        paddingVertical:vs(10),
       
        margin:vs(25),
        borderWidth:2,
        borderRadius:s(24),
        justifyContent:"center"

    

    }
})