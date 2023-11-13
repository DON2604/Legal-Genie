import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image, View, Pressable } from "react-native";
import styles from "../styles/signup.styles";
import Logo from "../constants/legs.svg";
import texti from "../constants/textg.png";
import { useFonts } from 'expo-font';



export default function Signup() {

  const [fontsLoaded] = useFonts({
    'INDIA2023': require('../assets/fonts/INDIA2023-bold.ttf')
  });
  
  const handlePress = () => {
    navigation.navigate('AppContainer'); 
  };


  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Logo style={styles.image} />
      <Image style={styles.texti} source={texti} />

      <View style={{ flexDirection: "row" }}>
        <LinearGradient colors={["#a390f9", "#fed488"]} style={styles.button}>
          <Pressable LinearGradient style={styles.button}>
            Sign Up
          </Pressable>
        </LinearGradient>

        <LinearGradient colors={["#a390f9", "#fed488"]} style={styles.button}>    
          <Pressable LinearGradient style={styles.button}>
          <Link style={styles.link}
          href={{ pathname: "AppContainer", params: { name: "Bacon" } }}> Login </Link>
          </Pressable>

        </LinearGradient>
      </View>
    </View>
  );
}
