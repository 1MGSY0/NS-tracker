import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

let bmi;
let weight;
let height;
let date;

function SaveData () {
  bmi = weight / height **2
  return <Text>{ bmi }</Text>;
}

export default function AddHealthData () {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen' }}>
      <Text>Date:</Text>
      <Text>Height:</Text>
      <Text>Weight:</Text>
      <Button onPress={ SaveData } title = "Save Data" ></Button>
    </View>
  );
}
