import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', // Add this line to set the background color to black
  },
  headerImage: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    color: 'white', // Set text color to white for better visibility on black background
  },
  link: {
    color: 'white', 
  },

  image: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
  }
});

export default styles;
