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
        <Stack.Screen name="Health" component={HealthDataPage} />
        <Stack.Screen name="Add" component={AddHealthData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}