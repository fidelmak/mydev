import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, s, vs } from 'react-native-size-matters'

const Total = () => {
  return (
   <View style={styles.totalButton}>
 <Text style={{color:"black"}}>Total:</Text>
<View style={{width:s(10)}}/>
      <Text style={{color:"#FF7622", fontSize:moderateScale(30)}}>$96</Text>
    </View>
  )
}

export default Total

const styles = StyleSheet.create({
     totalButton:{
            flexDirection:'row',
            alignItems:"flex-start",
           
            paddingVertical:vs(10),
            marginHorizontal:s(17),
           
            marginTop:vs(5),
           
            
    
        
    
        }
})