import { StyleSheet , View, Text, Platform, ActivityIndicator, SafeAreaView} from 'react-native'
import React from 'react'

const New = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text>This is a {Platform.OS=== "android" ? "Android ": "IOS"} testing application </Text>
 
      <ActivityIndicator size="large" color="green" />
    </View>
    <View style={styles.box} >
      <View style={styles.box2}></View>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
        justifyContent:'center',
        alignItems:'center'
    },
    box:{

        width:100,
        height:100,
        backgroundColor:'red',
        marginVertical:60,
        paddingTop:20,
        paddingLeft:20,
        
        

    },    
    box2:{
        width:60,
        height:60,
        backgroundColor:'blue',
       
       
    }
})
export default New