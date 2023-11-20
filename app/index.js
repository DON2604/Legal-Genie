import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image, View, Pressable, Text } from "react-native";
import styles from "../styles/signup.styles";
import text2 from "../constants/leg.jpeg";
import texti from "../constants/textg.png";
import { useFonts } from "expo-font";

export default function Signup() {
  const [fontsLoaded, error] = useFonts({
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "montserrat-SemiBoldItalic": require("../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
    "montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <View style={styles.container}>

      <Image style={styles.image} source={text2} />
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
          href={{ pathname: "AppContainer"}}> <Text>Login</Text> </Link>
          </Pressable>

        </LinearGradient>
      </View>
    </View>
  );
}
