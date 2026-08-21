import React from 'react';
import { StyleSheet, View,  } from 'react-native';



// we will be talking about percentage 
//dimension 
//responsiveness 
const Responsive = () => {





    return (
        <View style={styles.container}>
            <View style={styles.box3}></View>
            {/* <Text>Screen Width: {width}</Text>
            <Text>Screen Height: {height}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    box3:{
       
         width: "50%",//"100%",
        height:'100%',// 200,
        backgroundColor: 'green',
      
    }
})

export default Responsive;
