import * as React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const PhoneAbout = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/fpdl.png")} // Use your image source here
    >
      <View style={styles.iphone1415Pro1}>
        <Text style={[styles.welcomeToLegal, styles.aboutUsPosition]}>
          Welcome to Legal Genie, a revolutionary application designed to simplify
          the comprehension of the Indian Constitution. Our mission is to make the
          complexities of constitutional law accessible to everyone, from students
          and researchers to the general public.
        </Text>
        <Text style={[styles.aboutUs, styles.aboutUsPosition]}>ABOUT US</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch" or "contain"
    justifyContent: "center",
  },
  aboutUsPosition: {
    textAlign: "center",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  welcomeToLegal: {
    marginLeft: -144.5,
    top: 224,
    fontSize: 20,
    letterSpacing: 0.4,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 289,
  },
  aboutUs: {
    marginLeft: -110.5,
    top: 90,
    fontSize: 40,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
  },
  iphone1415Pro1: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.5)", // Add background color with opacity
  },
});

export default PhoneAbout;
