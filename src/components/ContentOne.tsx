import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { scale, verticalScale, moderateScale,vs,s } from 'react-native-size-matters';


const ContentOne = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >Morning Workout </Text>
           
        </View>
    );
}

const styles =  StyleSheet.create({
   container: {

  width: '100%',

  marginTop: vs(20),
  justifyContent: 'space-between',
  alignItems: 'center',

  flexDirection: 'row',
},
    text:{
        color: 'white',
        fontSize: s(50),
       fontWeight: '200',
        marginLeft: 10,
       textAlign: 'left',
       width: '80%',

     
    },
    circle:{
        width: s(40),
        height: s(40),
        borderRadius: s(20),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
   
});

export default ContentOne;
