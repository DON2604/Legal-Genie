import React from 'react'
import { Link, Stack } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View, Pressable } from 'react-native';
import styles from '../styles/signup.styles';
import Logo from '../constants/legs.svg';
import texti from '../constants/textg.png';

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
        }}
      />

      <Logo style={styles.image} /> 
      <Image  style={styles.texti}  source={texti} /> 

      <View style={{flexDirection: 'row'}}>
      <LinearGradient
        colors={['#a390f9','#fed488']}
        style={styles.button}>
        <Pressable LinearGradient style={styles.button}>Sign Up</Pressable>
        </LinearGradient> 


        <LinearGradient
        colors={['#a390f9','#fed488']}
        style={styles.button}>
        <Pressable LinearGradient style={styles.button}>Login</Pressable>
        </LinearGradient>

</View>

      <Link style={styles.link} href={{ pathname: 'home', params: { name: 'Bacon' } }}>Go to Home again</Link>
    </View>
  );
}
