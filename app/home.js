import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/home.styles';
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const [legalHelp, setLegalHelp] = useState('');
  const [output, setOutput] = useState('');


  const handleLegalHelpChange = (text) => {
    setLegalHelp(text);
  };


  const handleSubmit = () => {
    setOutput("Under development.\nPlease check back later");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Legal Genie</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputContainer}>Enter your legal help needed:</Text>
        <TextInput
          style={styles.input}
          value={legalHelp}
          onChangeText={handleLegalHelpChange}
          multiline
        />
      </View>

      <LinearGradient colors={["#a390f9", "#fed488"]}><TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      </LinearGradient>

      <View style={styles.outputContainer}>
        <Text style={styles.inputContainer}>Output:</Text>
        <Text style={styles.inputContainer}>{output}</Text>
      </View>
    </View>
  );
}
