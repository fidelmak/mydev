import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Learn_flex = () => {
  return (
    <>
    <View style={{
        flex: 1,  // Changed from 5 to 1 (typical for full screen)
        backgroundColor: 'blue',
        justifyContent: 'center',  // Center content vertically
        alignItems: 'center', 
    }}>
     
    </View>
    <View style={{
        flex:1,  // Changed from 5 to 1 (typical for full screen)
        backgroundColor: 'white',
        justifyContent: 'center',  // Center content vertically
        alignItems: 'center', 
    }}>
     
    </View>
     <View style={{
        flex: 2,  // Changed from 5 to 1 (typical for full screen)
        backgroundColor: 'red',
        justifyContent: 'center',  // Center content vertically
        alignItems: 'center', 
    }}>
     
    </View>
     
    </>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 5,  // Changed from 5 to 1 (typical for full screen)
        backgroundColor: 'blue',
        justifyContent: 'center',  // Center content vertically
        alignItems: 'center',      // Center content horizontally
    }
})  

export default Learn_flex