import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ContactUs = () => {
  const handleSubmit = () => {
    // Handle form submission logic here
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
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: widthPercentageToDP('5%'),
  },
  title: {
    fontSize: widthPercentageToDP('5%'),
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP('3%'),
  },
  input: {
    width: '100%',
    height: heightPercentageToDP('6%'),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: widthPercentageToDP('3%'),
    marginBottom: heightPercentageToDP('3%'),
    fontSize: widthPercentageToDP('4%'),
  },
  messageInput: {
    height: heightPercentageToDP('15%'),
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: heightPercentageToDP('2%'),
    paddingHorizontal: widthPercentageToDP('5%'),
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: widthPercentageToDP('4%'),
    textAlign: 'center',
  },
});

export default ContactUs;
