import React from 'react';
import { StyleSheet, View, Dimensions,Text } from 'react-native';



// we will be talking about percentage 
//dimension 
//responsiveness 
const Position = () => {

//console.log(Dimensions.get('screen'))
// without destructuring to get the width and height of the screen
// const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('screen').height;

// using destructuring to get the width and height of the screen
const {width, height} = Dimensions.get('screen')


    return (
        <View style={styles.container}>
            <View style={{
                 width:width,//"100%",
        height:height/2,//    '100%',// 200,
        backgroundColor: 'green',
            }}></View>
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
       
        //  width: "50%",//"100%",
        // height:'100%',// 200,
        // backgroundColor: 'green',
      
    }
})

export default Position;
