import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AddHealthData from './HealthPage/AddHealthData';
import HealthDataPage from './HealthPage/HealthDataPage';

const HealthStack = createStackNavigator();

export default function HealthPageNav({}) {
  return (
    <NavigationContainer>
      <HealthStack.Navigator>
        <HealthStack.Screen 
          name="HomePage" 
          component={HealthDataPage}
        />
        <HealthStack.Screen
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
      </HealthStack.Navigator>
    </NavigationContainer>
  );
}