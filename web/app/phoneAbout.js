import * as React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const PhoneAbout = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/fpdl.png")} 
    >
      <View style={styles.iphone1415Pro1}>
        <Text style={[styles.welcomeToLegal, styles.aboutUsPosition]}>
          The "Legal Genie" project proposes an innovative solution to address
          the challenges of comprehending the intricate Indian Constitution. The
          solution includes an interactive learning interface, personalized
          learning paths, and natural language processing for simplified
          explanations. It incorporates interactive quizzes, simulations, and
          regular updates, fostering community engagement and discussion forums.
        </Text>
        <Text style={[styles.aboutUs, styles.aboutUsPosition]}>ABOUT US</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", 
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
    backgroundColor: "rgba(0,0,0,0.5)", 
  },
});

export default PhoneAbout;
