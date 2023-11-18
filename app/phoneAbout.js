import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PhoneAbout = () => {
  return (
    <View style={styles.iphone1415Pro1}>
      <View style={[styles.image5, styles.image5Position]} />
      <Image
        style={[styles.image3Icon, styles.image5Position]}
        contentFit="cover"
        source={require("../assets/image3.png")}
      />
      <Text style={styles.aboutUs}>ABOUT US</Text>
      <Text style={[styles.welcomeToLegal, styles.legalFlexBox]}>
        Welcome to Legal Genie, a revolutionary application designed to simplify
        the comprehension of the Indian Constitution. Our mission is to make the
        complexities of constitutional law accessible to everyone, from students
        and researchers to the general public.
      </Text>
      <View style={styles.iphone1415Pro1Inner} />
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={styles.rectangleLayout}>
          <View style={styles.groupChild} />
          <Image
            style={[styles.image4Icon, styles.rectangleLayout]}
            contentFit="cover"
            source={require("../assets/image4.png")}
          />
        </View>
        <Text style={[styles.withLegalGenie, styles.withTypo]}>
          With Legal Genie, we leverage the power of artificial intelligence to
          break down the intricacies of the Indian Constitution into digestible
          and user-friendly content. Whether you are a legal enthusiast seeking
          in-depth knowledge or a student navigating through constitutional
          studies, our tool aims to be your go-to resource.
        </Text>
      </View>
      <View
        style={[
          styles.withLegalGenieWeLeverageParent,
          styles.groupParentPosition,
        ]}
      >
        <Text style={styles.withTypo}>
          Embark on a journey of enlightenment, where the fusion of technology
          and legal expertise converges to demystify the Indian Constitution.
          Join us in fostering a community that values constitutional literacy
          and celebrates the richness of our democratic heritage.
        </Text>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupChild} />
          <Image
            style={[styles.image4Icon, styles.rectangleLayout]}
            contentFit="cover"
            source={require("../assets/image6.png")}
          />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupParentPosition]}>
        <View style={styles.rectangleLayout}>
          <View style={styles.groupChild} />
          <Image
            style={[styles.image4Icon, styles.rectangleLayout]}
            contentFit="cover"
            source={require("../assets/image5.png")}
          />
        </View>
        <Text style={[styles.withLegalGenie, styles.withTypo]}>
          Explore a seamless learning experience as we unravel the principles,
          articles, and amendments that form the backbone of the Indian
          Constitution. Legal Genie strives to empower individuals with a deeper
          understanding of their rights, duties, and the constitutional fabric
          that shapes our nation.
        </Text>
      </View>
      <Text style={[styles.letLegalGenie, styles.legalFlexBox]}>
        Let Legal Genie be your guide in navigating the profound world of the
        Indian Constitution effortlessly. Happy learning!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image5Position: {
    opacity: 0.45,
    top: 0,
    left: 0,
    position: "absolute",
  },
  iphone1415Position: {
    left: "50%",
    position: "absolute",
  },
  legalFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  groupParentPosition: {
    flexDirection: "row",
    marginLeft: -173.5,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 114,
    width: 114,
  },
  withTypo: {
    width: 210,
    textAlign: "left",
    lineHeight: 11,
    letterSpacing: 0.4,
    fontSize: FontSize.size_5xs,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  image5: {
    height: 191,
    width: 393,
    backgroundColor: Color.colorBlack,
  },
  image3Icon: {
    width: 467,
    height: 227,
  },
  iphone1415Pro1Child: {
    marginLeft: -36.25,
    top: 69,
    width: 74,
    height: 2,
  },
  aboutUs: {
    marginLeft: -71.5,
    top: 37,
    fontSize: 24,
    letterSpacing: 1.7,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  welcomeToLegal: {
    marginLeft: -158.5,
    top: 100,
    fontSize: 10,
    letterSpacing: 0.2,
    lineHeight: 12,
    width: 318,
  },
  iphone1415Pro1Item: {
    marginLeft: -3.18,
    top: 208,
    width: 7,
    height: 4,
  },
  iphone1415Pro1Inner: {
    top: 223,
    backgroundColor: "#181818",
    height: 629,
    width: 393,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 12,
    left: 12,
    backgroundColor: Color.colorDarkslategray,
    width: 102,
    height: 102,
    position: "absolute",
  },
  image4Icon: {
    top: -6,
    left: -6,
    position: "absolute",
  },
  withLegalGenie: {
    marginLeft: 24,
  },
  groupParent: {
    top: 261,
  },
  rectangleGroup: {
    marginLeft: 24,
  },
  withLegalGenieWeLeverageParent: {
    top: 409,
  },
  groupContainer: {
    top: 572,
  },
  letLegalGenie: {
    marginLeft: -184.5,
    bottom: 132,
    fontSize: 5,
    letterSpacing: 0.3,
    lineHeight: 7,
    width: 370,
  },
  iphone1415Pro1: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default PhoneAbout;
