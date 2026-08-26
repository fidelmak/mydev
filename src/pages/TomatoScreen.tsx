import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation, useRoute } from '@react-navigation/native'

const TomatoScreen = () => {

    const navigation = useNavigation()
   
  return (
    <View style={styles.container}>
      <Text style={{fontSize:moderateScale(32)}}>TomatoScreen</Text>
      <Button onPress={()=>navigation.navigate("Pepper")} title='PepperScreen'></Button>
       <Text onPress={()=>navigation.navigate("Gold", {name:"Paul"})}>Go back</Text>
    </View>
  )
}

export default TomatoScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor:"tomato"

    }
})