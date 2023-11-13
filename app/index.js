import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image, View, Pressable, Text } from "react-native";
import styles from "../styles/signup.styles";
import Logo from "../constants/legs.svg";
import texti from "../constants/textg.png";
import { useFonts } from 'expo-font';



export default function Signup() {

  const login = "Login";

  
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
          <Text>Sign Up</Text>
          </Pressable>
        </LinearGradient>

        <LinearGradient colors={["#a390f9", "#fed488"]} style={styles.button}>    
          <Pressable LinearGradient style={styles.button}>
          <Link style={styles.link}
          href={{ pathname: "AppContainer", params: { name: "Bacon" } }}> <Text>Login</Text> </Link>
          </Pressable>

        </LinearGradient>
      </View>
    </View>
  );
}
