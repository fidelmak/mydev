import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CashIcon from './CashIcon'
import PaymentCard from './PaymentCard'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { s } from 'react-native-size-matters';

const PaymentMethods = [
    {title:"cash", icon:<CashIcon icon={<MaterialCommunityIcons name="cash-multiple" size={24} color="#FF7622" />} />, },
     {title:"MasterCard", icon:<CashIcon icon={<Fontisto name="mastercard" size={24} color="#FF7622" />} />},
      {title:"PayPal", icon:<CashIcon icon={<FontAwesome name="paypal" size={24} color="#FF7622"  />} />},
       {title:"Visa", icon:<CashIcon icon={<FontAwesome name="cc-visa" size={24} color="#FF7622" />} />},
       {title:"cash1", icon:<CashIcon icon={<MaterialCommunityIcons name="cash-multiple" size={24} color="#FF7622" />} />, },
     {title:"MasterCard1", icon:<CashIcon icon={<Fontisto name="mastercard" size={24} color="#FF7622" />} />},
      {title:"PayPal1", icon:<CashIcon icon={<FontAwesome name="paypal" size={24} color="#FF7622"  />} />}
]

const PaymentList = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <View >
     <FlatList
     data={PaymentMethods}
     keyExtractor={(item)=>item.title}
     renderItem={({item})=><PaymentCard title={item.title} isSelected={selectedId === item.title}icon={item.icon} onPress={() => setSelectedId(item.title)} />}
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{ gap: s(5) }}
     />
    </View>
  )
}

export default PaymentList

const styles = StyleSheet.create({})