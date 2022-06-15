import AddScreen from './FitnessPage/AddScreen';
import RecordStack from './FitnessPage/RecordStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExampleOne from './FitnessPage/Table';

const Stack = createStackNavigator();

export default function FitnessPageNav({navigatioin}) {
  return (
    <NavigationContainer>
      <Stack.Navigator presentation="modal" headerShown= 'false' >
        <Stack.Screen 
        name="Fitness" 
        component={RecordStack} 
        options={{ headerShown: false }} />
      <Stack.Screen name="Add Record" component={AddScreen} />
      <Stack.Screen name="History" component={ExampleOne} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}