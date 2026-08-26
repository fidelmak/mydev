import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {
  s,
  vs,
  moderateScale,
} from 'react-native-size-matters';
import BackButton from '../components/Backbutton';
import PaymentCard from '../components/PaymentCard';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import PaymentList from '../components/PaymentList';
import BankCardBox from '../components/BankCardBox';
import SampleCard from '../components/SampleCard';
import AddButton from '../components/AddButton';
import Total from '../components/Total';
import PaymentButton from '../components/PaymentButton';

const PaymentScreen = () => {
  const   [click ,setClick] = useState(true);
    const goBack=()=>{}
  return (
    <View style={styles.container}>
        <View style ={styles.nav}>
             <BackButton action={goBack} />
             <View style={styles.activitySpacingW}/>
            <Text style= {styles.navText}>Payment</Text> 
        </View>
     
           
     
         
         <PaymentList />
            
         <View style={{paddingHorizontal: s(20),}}>
             <BankCardBox />
         </View>
         <AddButton />
         <Total />
         <PaymentButton />


    </View>
  )
}
const styles = StyleSheet.create({

        navText:{
       color: 'black',
    fontSize: moderateScale(16),
    fontWeight: '400',
    },
    nav:{
         paddingHorizontal: s(20),
        flexDirection: 'row', alignItems: 'center',
         marginTop: vs(40), marginBottom: vs(20)},
 
  container: {
    flex: 1,
    width: '100%',
   
    backgroundColor: 'white',
  },

  
  
  activitySpacingH: {
    height: vs(14),
  },
  activitySpacingW: {
    width: s(14),
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: vs(25),
  },

  startButton: {
    width: '100%',
    height: vs(50),
    borderRadius: s(24),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  startText: {
    color: 'black',
    fontSize: moderateScale(30),
    fontWeight: '600',
  },
});
export default PaymentScreen 