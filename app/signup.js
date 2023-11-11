// signup.js

import { Link, Stack } from 'expo-router';
import { Image, Text, View } from 'react-native';
import styles from '../styles/signup.styles';
import leg from '../constants/leg.jpeg';

function LogoTitle() {
  return (
    <Image
      style={styles.headerImage}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function Signup() {
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: false,
          title: 'Signup',
          headerStyle: { backgroundColor: '#f4511e' }, // Set header background color to transparent
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => null,
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Image style={styles.image} source={leg} /> 
      <Text style={styles.text}>Sign Up Page</Text>
      <Link style={styles.link} href={{ pathname: 'home', params: { name: 'Bacon' } }}>Go to Home again</Link>
    </View>
  );
}
