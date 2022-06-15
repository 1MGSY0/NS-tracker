import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HealthDataPage from "./HealthPage/HealthDataPage";
import FitnessScreen from "./FitnessPage/FitnessScreen";
import { FontAwesome, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

function HomeScreen() {
  return (<Text>HomeScreen</Text>);
}

function CalenderNav() {
  return (<Text>Calender screen</Text>);
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let color = focused ? "lightgreen": "grey";
            if (route.name === "Home") {
              return (<FontAwesome name="home" size={24} color={color} />);
            } else if (route.name === "Calender") {
              return (<FontAwesome name="calendar" size={24} color={color} />);
            } else if (route.name === "Health") {
              return (<Entypo name= "bar-graph" size={24} color={color} />);
            } else if (route.name === "FitnessPageNav") {
              iconName = focused ? "arm-flex" : "arm-flex-outline";
              return (<MaterialCommunityIcons name={iconName} size={24} color={color} />);
            }
          },
          tabBarActiveTintColor: "lightgreen",
          tabBarInactiveTintColor: "grey",
          tabBarActiveBackgroundColor: "#1E1E1E",
          tabBarInactiveBackgroundColor: "#323232",
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
                title:"Home",
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
              }} />
        <Tab.Screen 
        name="Calender" 
        component={CalenderNav} 
        options={{
                title:"Home",
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
              }}/>
        <Tab.Screen 
          name="Health" 
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
        <Tab.Screen 
        name="FitnessPageNav" 
        component={FitnessScreen} 
        options={{
              title:"Fitness",
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
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}