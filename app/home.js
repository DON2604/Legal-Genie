import { Link, Stack } from 'expo-router';
import styles from "../styles/home.styles";
import { Image, Text, View } from 'react-native';



export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
            headerShown: false,
        }}
      />

      <Text style={styles.txt}>Home Screen</Text>
      <Link style={styles.txt} href={{ pathname: 'signup', params: { name: 'signup' } }}>Go to Signup</Link>
      <Link style={styles.txt} href={{ pathname: 'about', params: { name: 'about' } }}>Go to About</Link>
    </View>
  );
}



