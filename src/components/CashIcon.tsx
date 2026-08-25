import { StyleSheet, Text, View } from 'react-native'
import React from 'react'




interface CashIconProps {

  icon: React.ReactNode;
}

const CashIcon = ({icon}:CashIconProps) => {
  return (
    <View>
     {icon}
    </View>
  )
}

export default CashIcon

const styles = StyleSheet.create({})