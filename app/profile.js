import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <LinearGradient
        style={styles.bg}
        locations={[0, 1]}
        colors={["#2e2e2e", "#181818"]}
      />
      <Image
        style={styles.profileImage}
        contentFit="cover"
        source={require("../assets/profile-image.png")}
      />
      <View style={styles.usernameParent}>
        <View style={[styles.username, styles.nameLayout]}>
          <View style={[styles.username, styles.nameLayout]}>
            <Text style={[styles.username2, styles.genvTypo]}>Username</Text>
            <Text style={[styles.genv, styles.genvTypo]}>GenV</Text>
            <View style={[styles.usernameChild, styles.profile1Position]} />
          </View>
        </View>
        <View style={[styles.firstName, styles.nameLayout]}>
          <View style={[styles.username, styles.nameLayout]}>
            <Text style={[styles.username2, styles.genvTypo]}>First Name</Text>
            <Text style={[styles.genv, styles.genvTypo]}>Bhupendra</Text>
            <View style={[styles.usernameChild, styles.profile1Position]} />
          </View>
        </View>
        <View style={[styles.lastName, styles.nameLayout]}>
          <View style={[styles.username, styles.nameLayout]}>
            <Text style={[styles.username2, styles.genvTypo]}>Last name</Text>
            <Text style={[styles.genv, styles.genvTypo]}>Jogi</Text>
            <View style={[styles.usernameChild, styles.profile1Position]} />
          </View>
        </View>

      </View>
      <Text style={[styles.profile1, styles.profile1Position]}>Profile</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  nameLayout: {
    height: 56,
    width: 315,
    left: 0,
    position: "absolute",
  },
  genvTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  profile1Position: {
    left: "50%",
    position: "absolute",
  },
  bg: {
    width: '100%',
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    position: "absolute",
    height: '100%',
  },
  profileImage: {
    top: 169,
    right: 137,
    borderRadius: 36,
    width: 100,
    height: 100,
    position: "absolute",
  },
  username2: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorWhite,
    textAlign: "left",
    top: 0,
  },
  genv: {
    top: 32,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray,
    textAlign: "left",
    color: Color.colorWhite,
  },
  usernameChild: {
    marginLeft: -158,
    top: 56,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    width: 316,
    height: 1,
  },
  username: {
    top: 0,
  },
  firstName: {
    top: 80,
  },
  lastName: {
    top: 160,
  },
  usernameParent: {
    top: 338,
    left: 30,
    height: 216,
    width: 315,
    position: "relative",
  },
  profile1: {
    marginLeft: -47.5,
    top: 62,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
  },
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Profile;
