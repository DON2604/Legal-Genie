import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const PhoneAbout = () => {
  return (
    <View style={styles.iphone1415Pro1}>
      <Image
        style={styles.fpdl1Icon}
        contentFit="cover"
        source={require("../assets/fpdl.png")}
      />
      <Text style={[styles.welcomeToLegal, styles.aboutUsPosition]}>
        Welcome to Legal Genie, a revolutionary application designed to simplify
        the comprehension of the Indian Constitution. Our mission is to make the
        complexities of constitutional law accessible to everyone, from students
        and researchers to the general public.
      </Text>
      <Text style={[styles.aboutUs, styles.aboutUsPosition]}>ABOUT US</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutUsPosition: {
    textAlign: "center",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  fpdl1Icon: {
    marginTop: -426,
    marginLeft: -196.5,
    top: "50%",
    width: 626,
    height: 938,
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
    backgroundColor: "#181818",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default PhoneAbout;
