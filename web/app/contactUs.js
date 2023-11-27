import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { LinearGradient } from "expo-linear-gradient";

const ContactUs = () => {
  const handleSubmit = () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        placeholderTextColor="#888"
        multiline
        numberOfLines={5}
      />
      <LinearGradient colors={["#a390f9", "#fed488"]}>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: widthPercentageToDP('5%'),
    backgroundColor: '#000',
  },
  title: {
    fontSize: widthPercentageToDP('9%'),
    fontWeight: 'bold',
    marginTop: heightPercentageToDP('-5%'),
    marginBottom: heightPercentageToDP('7%'),
    color: '#fff',
  },
  input: {
    width: '100%',
    height: heightPercentageToDP('6%'),
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: widthPercentageToDP('3%'),
    marginBottom: heightPercentageToDP('3%'),
    fontSize: widthPercentageToDP('4%'),
    color: '#fff',
  },
  messageInput: {
    height: heightPercentageToDP('15%'),
  },
  submitButton: {
    paddingVertical: heightPercentageToDP('1.6%'),
    paddingHorizontal: widthPercentageToDP('5%'),
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#000',
    fontSize: widthPercentageToDP('4.5%'),
    textAlign: 'center',
  },
});

export default ContactUs;

