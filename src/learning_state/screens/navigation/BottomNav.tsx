import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import DataScreen from "../DataScreen";
import HomeApp from "../HomeApp";
import SettingsScreen from "../SettingsScreen";
import { grey } from "../../../../constants/colors";

const Tab = createBottomTabNavigator();

export default function MyNavs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",

          tabBarInactiveTintColor: grey[400],
          tabBarStyle: {
            backgroundColor: "white",
          },
          tabBarLabelStyle: {
            fontSize: moderateScale(12),
            fontWeight: 600,
          },
          //  tabBarIcon:({color, focused, size})=> {
          //     return <Ionicons name="home" color={color} size={size} />
          // },
        }}
      >
        <Tab.Screen
          options={{
            title: "Home Page",
            headerShown: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: moderateScale(20),
              fontWeight: 600,
            },
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
          name="Home"
          component={HomeApp}
        />
        <Tab.Screen
          options={{
            title: "Data Screen",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="bookmark-outline" size={24} color={color} />
            ),
          }}
          name="Data Screen "
          component={DataScreen}
        />
        <Tab.Screen
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
