import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { vs ,s} from 'react-native-size-matters';


interface ActivityProps {
    text: string; 
    icon: React.ReactNode; // ✅ Fixed: proper property name
}
const Activity = ({ text, icon }: ActivityProps) => {
  return (
    <View style={{flexDirection: 'row',alignItems: 'center',marginTop: vs(10)}} >
                  {icon}
                  <View style={{width:s(10)}}/>
                     <Text style={styles.text}>{text}</Text>
            </View>
  )
}

export default Activity

const styles = StyleSheet.create({
    text:{
            fontSize:vs(18),
            color:"white",
            textAlign:"center",
            fontWeight:"200",
         
        },
})