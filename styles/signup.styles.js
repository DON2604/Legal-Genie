import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  // Add this line to set the background color to black
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
  },

  link: {
    color: 'black',
 
  },

  image: {
    marginTop: '3rem',
    width: '50%',
    height: '20%',
    resizeMode: 'contain',
  },
  
  texti: {
    marginTop: '3rem',
    width: '50%',
    resizeMode: 'contain',
    position: 'relative',
  },

});

export default styles;
