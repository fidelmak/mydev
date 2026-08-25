import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s,vs } from 'react-native-size-matters'
import Entypo from '@expo/vector-icons/Entypo';
import CashIcon from './CashIcon';
import { grey } from '../../constants/colors';
interface PaymentCardProps {
    title:string;
    icon:React.ReactNode;
    isSelected: boolean;
    onPress: ()=> void
}

const PaymentCard = ({isSelected = true, icon , title, onPress }: PaymentCardProps) => {
  return (
    <TouchableOpacity  onPress= { onPress }  style={{alignItems:"flex-start", marginTop:s(5) , width:s(85)}} >
        {isSelected && 
            <View style={styles.checkMarkContainer}>

            <Entypo name="check" size={s(12)} color="white" />

            </View>}
        <View style={[styles.card, isSelected && styles.selectedCardStyle]}>
         <CashIcon icon={icon} />   

        </View>
         <View style={styles.activitySpacingH}/>
        <Text style={{ color: "black", textAlign: "center", width:s(80),  }}>{title}</Text>
    
    
    </TouchableOpacity>
  )
}

export default PaymentCard

const styles = StyleSheet.create({
    activitySpacingH: {
    height: vs(8),
  },
    card:{
        backgroundColor:grey[200],
        height:vs(60),
        width:80,
         borderWidth:s(2),
           borderColor:grey[200],
            borderRadius:s(12),
            alignItems:"center",
            justifyContent:"center"


    },
    selectedCardStyle :{
            height:vs(60),
            width:80,
            backgroundColor:"fff",
            borderWidth:s(2),
            borderColor:"#FF7622",
            
        },
        checkMarkContainer:{
            height:s(24),
            width:s(24),
            borderRadius:s(12),
            borderWidth:s(2),
            borderColor:"white",

        backgroundColor:"#FF7622",
            position:"absolute",
            zIndex:1,
            top:s(-6),
            right:s(8),
            justifyContent:"center",
            alignItems:"center"
    
        },
    
})