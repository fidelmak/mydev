import { createStackNavigator } from '@react-navigation/stack';

import TomatoScreen from '../pages/TomatoScreen';
import GoldScreen from '../pages/GoldScreen';
import PepperScreen from '../pages/PepperScreen';

const Stack = createStackNavigator();
function MainStackStackNavigator() {
    return (
        <Stack.Navigator
        screenOptions={{headerShown:false}} initialRouteName="Gold"
        >
            <Stack.Screen name="Tomato" component={TomatoScreen}/>
            <Stack.Screen name="Gold" component={GoldScreen}/>
            <Stack.Screen options={{headerShown:true, title:"Pepper"}} name="Pepper" component={PepperScreen}/>
        </Stack.Navigator>
    )
}

export default MainStackStackNavigator