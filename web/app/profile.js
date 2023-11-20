import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.profileContent}>
        <Text style={[styles.profile1, styles.profile1Position]}>Profile</Text>
        <Image
          style={styles.profileImage}
          contentFit="cover"
          source={require("../assets/profile-image.png")}
        />
        <View style={styles.userInfo}>
          <View style={styles.nameLayout}>
            <Text style={[styles.genvTypo, styles.username2]}>Username</Text>
            <Text style={[styles.genvTypo, styles.genv]}>SpiderMan</Text>
          </View>
          <View style={styles.nameLayout}>
            <Text style={[styles.genvTypo, styles.username2]}>First Name</Text>
            <Text style={[styles.genvTypo, styles.genv]}>Peter</Text>
          </View>
          <View style={styles.nameLayout}>
            <Text style={[styles.genvTypo, styles.username2]}>Last name</Text>
            <Text style={[styles.genvTypo, styles.genv]}>Parker</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameLayout: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  genvTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
  },
  username2: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    marginRight: wp("2%"),
  },
  genv: {
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite,
  },
  profile1Position: {
    textAlign: "center",
    color: Color.colorWhite, // Adjusted to bring it a bit above
  },
  bg: {
    width: wp("100%"),
    backgroundColor: "transparent",
    height: hp("100%"),
    position: "absolute",
  },
  profileContent: {
    flex: 1,
    alignItems: "center",
    marginTop: hp("10%")
  },
  profileImage: {
    borderRadius: wp("50%"),
    width: wp("20%"),
    height: wp("20%"), 
    marginTop: wp("5%"),
    marginBottom: wp("5%"),// Adjusted to bring it a bit above
  },
  userInfo: {
    width: wp("80%"),
    marginTop: wp("3%"),
  },
  profile1: {
    fontSize: wp("9%"),
    fontWeight: "600",
    fontFamily: FontFamily.montserratBold,
  },
  profile: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
