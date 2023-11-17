import * as React from "react";
import { Stack } from "expo-router";
import { Image } from "expo-image";
import { View, Text, ScrollView } from "react-native";
import styles from "../styles/about.styles";


const Desktop2 = () => {
  return (
    <ScrollView style={styles.desktop2}>
    <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image3.png")}
      />
      <View style={styles.bg} />
      <View style={styles.aboutUsParent}>
        <Text style={[styles.aboutUs, styles.aboutTypo]}>ABOUT US</Text>
        <Text style={[styles.aboutUs1, styles.aboutTypo]}>ABOUT US</Text>
      </View>
      <Text style={[styles.welcomeToLegal, styles.legalPosition]}>
        Welcome to Legal Genie, a revolutionary application designed to simplify
        the comprehension of the Indian Constitution. Our mission is to make the
        complexities of constitutional law accessible to everyone, from students
        and researchers to the general public.
      </Text>
      <Text style={[styles.letLegalGenieContainer, styles.legalPosition]}>
        <Text style={styles.letLegalGenieContainer1}>
          <Text
            style={styles.legalTypo}
          >{`Let Legal Genie be your guide in navigating the profound world of the Indian Constitution effortlessly. `}</Text>
          <Text style={styles.happyLearning}>Happy learning!</Text>
        </Text>
      </Text>
      <View style={[styles.groupParent, styles.groupParentFlexBox]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image4.png")}
          />
        </View>
        <Text style={[styles.withLegalGenie, styles.withLegalGenieTypo]}>
          With Legal Genie, we leverage the power of artificial intelligence to
          break down the intricacies of the Indian Constitution into digestible
          and user-friendly content. Whether you are a legal enthusiast seeking
          in-depth knowledge or a student navigating through constitutional
          studies, our tool aims to be your go-to resource.
        </Text>
      </View>
      <View style={[styles.groupContainer, styles.groupParentFlexBox]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image6.png")}
          />
        </View>
        <Text style={[styles.withLegalGenie, styles.withLegalGenieTypo]}>
          Embark on a journey of enlightenment, where the fusion of technology
          and legal expertise converges to demystify the Indian Constitution.
          Join us in fostering a community that values constitutional literacy
          and celebrates the richness of our democratic heritage.
        </Text>
      </View>
      <View
        style={[
          styles.exploreASeamlessLearningExParent,
          styles.groupParentFlexBox,
        ]}
      >
        <Text style={[styles.exploreASeamless, styles.withLegalGenieTypo]}>
          Explore a seamless learning experience as we unravel the principles,
          articles, and amendments that form the backbone of the Indian
          Constitution. Legal Genie strives to empower individuals with a deeper
          understanding of their rights, duties, and the constitutional fabric
          that shapes our nation.
        </Text>
        <View style={styles.rectangleContainer}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image5.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Desktop2;
