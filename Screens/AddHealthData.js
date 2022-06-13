import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

let bmi;
let weight;
let height;
let date;

function SaveData ({ weight }, { height }) {
  return weight / height ** 2
}

export default function AddHealthData () {
  
  return (
    <View style={styles.container}>
      <Text>Date:</Text>
      <Text>Height:</Text>
      <Text>Weight:</Text>
      <Button onPress={ bmi = SaveData } title = "Save Data" ></Button>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: 'lightgreen',
  },
});
