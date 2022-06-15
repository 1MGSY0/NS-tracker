import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import * as SQlite from "expo-sqlite";
import { Ionicons, Entypo} from '@expo/vector-icons';
import { Dimensions } from "react-native";
import {LineChart} from "react-native-chart-kit";

const db = SQlite.openDatabase("health.db");

export default function HealthDataPage ({ navigation, route }) {

    const [dataArray, setData] = useState([]);

    function refreshData() {
        db.transaction((tx)=> {
            tx.executeSql(
                "SELECT * FROM health",
                null,
                (txObj, { rows: { _array } }) => setData(_array),
                (txObj, error) => console.log("Error ", error)
            )
        })
    }

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS
                notes
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                date TEXT,
                height INT,
                weight INT,);`
            );
        }, null, refreshData);
      }, []);

    function deleteData() {
        db.transaction((tx) => {
            tx.executeSql(`DELETE FROM notes WHERE id=${id}`)
        }, null, refreshData);
    }

    function calculateBMI({nWeight, nHeight}){
        return (nWeight/nHeight**2);
    }

    useEffect(() => {
        if (route.params?.date && route.params?.height && route.params?.weight) {
            db.transaction((tx) => {
                tx.executeSql(
                    "INSERT INTO notes (date, height, weight, done) VALUES (?, ?, ?, 0)",
                     [route.params.date, route.params.height, route.params.weight]);
            }, null, refreshData)
        }
    }, [route.params?.date, route.params?.height, route.params?.weight])
    
    function renderItem({ item }) {
        return (
            <View styles={{
                padding: 10,
                paddingTop: 20,
                paddingBottom:20,
                borderbottomColor: "lightgreen",
                borderBottomWidth: 1,
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
            <Text style = {{ fontSize:16, textAlign:"left" }}>
                { item.date } Height: { item.height } Weight: { item.weight } BMI: { calculateBMI(item.weight, item.height)}
            </Text>
            <TouchableOpacity onPress={()=>deleteData(item.id)}>
                <Entypo name="trash" size={24} color="lightgreen" />
            </TouchableOpacity>
            </View>
        );
    }

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

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
      };

    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 19.7, 19.5, 19.4, 20.1, 19.8],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2
          }
        ],
        legend: ["BMI Graph"] 
      };

    return (
        <View style={styles.container}>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                verticalLabelRotation={30}
                chartConfig={chartConfig}
                bezier
            />
            <FlatList style = {{width:"100%"}} data={dataArray} renderItem={renderItem} />
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

