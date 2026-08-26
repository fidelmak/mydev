import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SampleCard from './SampleCard'
import { s ,vs,moderateScale} from 'react-native-size-matters'
import { grey } from '../../constants/colors'
import LottieView from 'lottie-react-native';


const BankCardBox = () => {
  return (
    <View style={styles.container}>

      {/* <SampleCard width={s(250)}    /> */}
       <LottieView source={require('./../../assets/BankCardAnimation.json')} autoPlay loop style={{width:200, height:150}} />
      <Text style={styles.test}>No Master Card Added</Text>
       <Text style={styles.test2}>You can add a masterCard and save it for later</Text>
    </View>
  )
}

export default BankCardBox

const styles = StyleSheet.create({
    container: {
      height:300,
       paddingVertical:vs(4),
        marginTop:vs(20),
        backgroundColor:"white",
        borderRadius:s(24),
        justifyContent:"center",
        borderColor:grey[200],
        borderWidth:2,
        alignItems:"center"
    },
    test:{
        
        
        color:"black",
        fontWeight:"bold",
        fontSize:moderateScale(21),
       

    },
    test2:{
        textAlign:"center",
        width:300,
        
        color:"black",
        fontWeight:"200",
        fontSize:moderateScale(16),
        

    }
})