import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation, useRoute } from '@react-navigation/native'

const GoldScreen = () => {
     const navigation = useNavigation()
    const {name, params} = useRoute()
     
        
  return (
    <View style={styles.container}>
      <Text style={{fontSize:moderateScale(32)}}>GoldScreen</Text>
      <Button onPress={()=>navigation.navigate("Tomato")} title='TomatoScreen' />
        <Text>Hello {params?.name}</Text>
    </View>
  )
}

export default GoldScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor:"gold"

    }
})