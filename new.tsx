import { StyleSheet , View, Text, Platform, ActivityIndicator, SafeAreaView} from 'react-native'
import React from 'react'

const New = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text>This is a {Platform.OS=== "android" ? "Android ": "IOS"} testing application </Text>
   <View style={{marginTop:20}} />
      <ActivityIndicator size="large" color="green" />
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
        justifyContent:'center',
        alignItems:'center'
    }
})
export default New