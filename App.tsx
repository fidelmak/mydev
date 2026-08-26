import { StatusBar } from 'expo-status-bar';
import {  Alert, StyleSheet, Text, View , Image, Pressable, ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import New from './new';
import Dev from './dev';
import Learn_flex from './learn_flex';

import Flex from './flex_direction';
import Position from './position';
import Responsive from './responsive_ui';
import FitnessHome from './src/pages/fitness_home';
import PaymentScreen from './src/pages/payment';
import GoldScreen from './src/pages/GoldScreen';
import MainStackStackNavigator from './src/navigation/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/BottomTabs';


export default function App() {
  const onButtonPress = () => Alert.alert("Button Pressed");

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    
    </SafeAreaProvider> 
  );
}

