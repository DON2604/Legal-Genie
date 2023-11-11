import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { Stack } from "expo-router";
import styles from "../styles/about.styles";

export default function About() {
  return (
    <ImageBackground
          source={{
            uri: "https://i.pinimg.com/originals/8c/99/4e/8c994ea26d49c97843924d1170b10bbf.png",
          }}
          style={styles.image}
        >
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.content}>
        
          <Text style={{ color: "#ffffff" }}>
            Welcome to Legal Genie, a revolutionary application designed to
            simplify the comprehension of the Indian Constitution. Our mission
            is to make the complexities of constitutional law accessible to
            everyone, from students and researchers to the general public. With
            Legal Genie, we leverage the power of artificial intelligence to
            break down the intricacies of the Indian Constitution into
            digestible and user-friendly content. Whether you are a legal
            enthusiast seeking in-depth knowledge or a student navigating
            through constitutional studies, our tool aims to be your go-to
            resource. Explore a seamless learning experience as we unravel the
            principles, articles, and amendments that form the backbone of the
            Indian Constitution. Legal Genie strives to empower individuals with
            a deeper understanding of their rights, duties, and the
            constitutional fabric that shapes our nation. Embark on a journey of
            enlightenment, where the fusion of technology and legal expertise
            converges to demystify the Indian Constitution. Join us in fostering
            a community that values constitutional literacy and celebrates the
            richness of our democratic heritage. Let Legal Genie be your guide
            in navigating the profound world of the Indian Constitution
            effortlessly. Happy learning!
          </Text>
      </View>
    </View>
    </ImageBackground>
  );
}
