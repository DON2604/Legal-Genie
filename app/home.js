import { Link } from 'expo-router';
import styles from "../styles/home.styles";
import { Text, View } from 'react-native';



export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home Screen</Text>
      <Link style={styles.txt} href={{ pathname: 'signup', params: { name: 'signup' } }}>Go to Signup</Link>
      <Link style={styles.txt} href={{ pathname: 'about', params: { name: 'about' } }}>Go to About</Link>
      <Link style={styles.txt} href={{ pathname: 'contactUs', params: { name: 'contactUs' } }}>Go to Contact Us</Link>
    </View>
  );
}



