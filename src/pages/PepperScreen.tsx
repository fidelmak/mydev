import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const PepperScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:moderateScale(32)}}>PepperScreen</Text>
     
    </View>
  )
}

export default PepperScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor:"red"

    }
})