import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HealthDataPage () {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>BMI Graph</Text>
            <Text>Ave BMI</Text>
            <Text>Ave Weight</Text>
            <Button 
            onPress={()=> navigation.navigate("Add")}
            title="Add Today's Data"></Button>
        </View>
    );
  }
  