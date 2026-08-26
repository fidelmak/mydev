
import GoldScreen from '../pages/GoldScreen';
import TomatoScreen from '../pages/TomatoScreen';
import PepperScreen from '../pages/PepperScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { grey } from '../../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{tabBarActiveTintColor:"red", 
        
        tabBarInactiveTintColor:grey[400],
        tabBarStyle:{
        backgroundColor:"white"
    }, 
    tabBarLabelStyle:{
        fontSize:moderateScale(12),
        fontWeight:600
    },
    //  tabBarIcon:({color, focused, size})=> {
    //     return <Ionicons name="home" color={color} size={size} />
    // },
   
}}
    >
      <Tab.Screen options={{title:"Home Page",headerShown:true, tabBarIcon:({color})=><Feather name="home" size={24} color={color} />}} name="Gold" component={GoldScreen} />
      <Tab.Screen options={{title:"Bookmark" ,headerShown:false,tabBarIcon:({color})=><Ionicons name="bookmark-outline" size={24} color={color} />}} name="Tomato" component={TomatoScreen} />
         <Tab.Screen options={{title:"Profile" ,headerShown:false,tabBarIcon:({color})=><Feather name="user" size={24} color={color} />}} name="Pepper" component={PepperScreen} />
    </Tab.Navigator>
  );
}