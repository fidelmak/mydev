import React from 'react';
import { StyleSheet, View } from 'react-native';

const Flex = () => {
    return (
        <View style={styles.box}>
        <View style={styles.box1}>
            
        </View>
        <View style={styles.box2}>
            
        </View>
         <View style={styles.box3}>
            
        </View>
         <View style={styles.box1}>
            
        </View>
        <View style={styles.box3}>
            
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
     box:{
        flex: 1,
        flexWrap: 'wrap',  // Allows items to wrap to the next line
        backgroundColor: 'white',
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center' ,
        alignContent:'center' // Changed from 'row' to 'column-reverse'
      
    },
    box1:{
        width: 100,
        height: 100,
        backgroundColor: 'red',

        
    },
     box2:{
        width: 80,
        height: 80,
        top:100,
        bottom:50,
        left:50,
        backgroundColor: 'blue',
        position:'absolute', // Changed from 'relative' to 'absolute'
      // Centers vertically (main axis)
      
    },
     box3:{
        width: 100,
        height: 100,
        backgroundColor: 'green',
      
    }
})

export default Flex;
