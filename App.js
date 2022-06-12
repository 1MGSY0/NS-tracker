import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HealthDataPage from './Screens/HealthDataPage';
import AddHealthData from './Screens/AddHealthData';
import ContactScreen from './Screens/ContactScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the Icon based on which route it is
            if (route.name === 'Health') {
              return <FontAwesome name="heartbeat" size={size} color={color} />;
            } else if (route.name === 'Add') {
              return <Ionicons name="add" size={size} color={color} />;
            } else if (route.name === 'Contact') {
              return <AntDesign name="contacts" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Health" component={HealthDataPage} />
        <Tab.Screen name="Add" component={AddHealthData} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}