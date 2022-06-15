import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function AddHealthData ({ navigation }) {

  const [date, setDate] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")

  return (

    <View style={styles.container}>

      <Text style={styles.text}>Fill in today's records</Text>

      <TextInput
        style={styles.input}
        value={date}
        onChangeText= {(newDate) => setDate(newDate)}
        placeholder="dd/mm/yyyy"
        maxLength={10}
      />

      <TextInput
        style={styles.input}
        value={height}
        onChangeText= {(newHeight) => setHeight(newHeight)}
        placeholder="Height in Metres"
        keyboardType="numeric"
        maxLength={3}
      />
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText= {(newWeight) => setWeight(newWeight)}
        placeholder="Weight in Kilogram"
        keyboardType="numeric"
        maxLength={3}
      />
      <View style = {styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={() => navigation.navigate(
            "HomePage", {date: date, height: height, weight: weight}
            )}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create( {

  text: {
    color: "lightgreen",
    fontWeight:"bold",
    fontSize: 20,
    marginBottom: 20,
  },

  container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#1E1E1E',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textDecorationColor: "lightgreen",
    color:"white"
  },

  buttons: {
    flexDirection: "row",
  },

  button: {
    padding: 10,
    margin: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  submitButton: {
    backgroundColor: "darkgreen",
  },
  cancelButton: {
    backgroundColor: "red",
  },

});
