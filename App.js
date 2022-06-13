//extension
import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

//Other Page
import AddHealthData from './Screens/AddHealthData';
import HealthDataPage from './Screens/HealthDataPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="HomePage" 
        component={HealthDataPage}
        options={{
          title:"Your Health Record",
          headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
              color: 'white'
          },
          headerStyle: {
              backgroundColor: '#1E1E1E',
              height: 100,
              borderBottomWidth: 5,
              borderBottomColor: 'lightgreen',
          }
        }}
        />
        <Stack.Screen
        name="Add" 
        component={AddHealthData}
        options={{
          title:"Add New Record",
          headerTintColor: 'white',
          headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
              color: 'white'
          },
          headerStyle: {
              backgroundColor: '#1E1E1E',
              height: 100,
              borderBottomWidth: 5,
              borderBottomColor: 'lightgreen',
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}