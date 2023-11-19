// home.styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black', // Set the background color of the container to white
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 39,
    marginTop: 14,
    color: 'white', // Set the text color to black
    textAlign: 'center', // Center the text
  },
  inputContainer: {
    color: 'white',
    marginBottom: 22,
    fontSize: 18,
  },
  input: {
    backgroundColor: '#fff', // Set the background color of the text input to white
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    fontSize: 16,
    color: '#301934', // Set the text color to black
  },
  button: {
    borderRadius: 8,
    padding: 8,
    paddingHorizontal: 4,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#000', // Set the text color of the button to white
    fontSize: 18,
  },
  outputContainer: {
    marginTop: 16,
  },
});

export default styles;
