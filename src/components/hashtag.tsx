import React from 'react';
import { StyleSheet, View,Text,  TextInputContentSizeChangeEvent } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { scale, verticalScale, moderateScale,vs,s } from 'react-native-size-matters';



interface hashTagsProps {
    text: string;        // ✅ Fixed: proper property name
   
}
const HashTags = ({ text}: hashTagsProps) => {
    return (
         <View style={styles.hashTags}>
                     
                       <Text style={styles.text} >#{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
     hashTags:{
        
        borderWidth: 1,
        borderColor: "rgba(176, 168, 168, 0.5)",
        borderRadius: s(20),
       backgroundColor: "rgba(176, 168, 168, 0.5)",
     
        
    paddingHorizontal: s(17), 
   
        //marginHorizontal: s(17),
        height: s(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: 'white',
        fontSize: s(12),
       fontWeight: '300',
       
       textAlign: 'center',
     

     
    },
})

export default HashTags;
