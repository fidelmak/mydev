import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

import {
  s,
  vs,
  moderateScale,
} from 'react-native-size-matters';
import { grey } from '../../constants/colors';
interface BackButtonProps  {
   action:()=> void

};

const BackButton = ({action}: BackButtonProps)  => {
  return (
    <View>
     <TouchableOpacity style={styles.circle} onPress={action}>
            <AntDesign name="arrow-left" size={16} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default BackButton

// usage: backgroundColor: grey[300]

const styles = StyleSheet.create({

    activitySpacing: {
    width: s(14),
  },

    circle:{
            width: s(30),
            height: s(30),
            borderRadius: s(20),
            backgroundColor: grey[300],
            justifyContent: 'center',
            alignItems: 'center',
        }
})