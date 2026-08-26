import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, s, vs } from 'react-native-size-matters'

const PaymentButton = () => {
  return (
    <TouchableOpacity  style={styles.button}>
      <Text style={{color:"white", fontSize:moderateScale(16)}}>PAY & CONFIRM</Text>
    </TouchableOpacity>
  )
}

export default PaymentButton

const styles = StyleSheet.create({
     button:{
            flexDirection:'row',
            alignItems:"center",
            borderColor:"#FF7622" ,
            paddingVertical:vs(10),
            backgroundColor:"#FF7622",
           
            margin:vs(25),
            borderWidth:2,
            borderRadius:s(24),
            justifyContent:"center"
    
        
    
        }
})