import React, { useEffect, useState} from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import * as SQlite from "expo-sqlite";
import { Ionicons } from '@expo/vector-icons';

const db = SQlite.openDatabase("health.db");

export default function HealthDataPage ({ navigation }) {

    //Create state variable for data
    const [healthData, setHealthData] = useState([
        {date: "Today", height: "170", weight: "60", done: false, BMI: ""}
    ])

    function addHealthData() {
        let newHealthData = {
            date: "Today",
            height: "170",
            weight: "60",
            done: false,
            BMI: ""
        };
        setHealthData([...healthData, newHealthData]);
    }
    
    //Navigates to adding new data
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Add")
                    }}
                >
                    <Ionicons 
                    name="add-circle" 
                    size= {30} 
                    color="lightgreen"
                    style={{ marginRight: 20 }}
                    />
                </TouchableOpacity>
            ),
        });
    });

    function renderItem({ item }) {
        return (
            <View>
                <Text>{item.date}</Text>
                <Text>{item.height}</Text>
                <Text>{item.weight}</Text>
                <Text>{item.BMI}</Text>
            </View>    
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={healthData}
                renderItem={renderItem}
                style={{ width: "100%" }}
            />
            <Text>Ave BMI</Text>
            <Text>Ave Weight</Text>
        </View>
    );
  }
  
const styles = StyleSheet.create( {
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#1E1E1E'
    },
});
