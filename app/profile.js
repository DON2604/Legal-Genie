import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVuQI6QXrY3HiEurXkZzbQ5Eikj4c30-Cuw&usqp=CAU",
        }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.username}>Cheems Balltze</Text>
        <Text style={styles.bio}>A brief bio about yourself goes here.</Text>
        <Text style={styles.additionalText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        deserunt sequi ipsum temporibus velit reprehenderit in aliquam culpa
        molestiae, corrupti nostrum. Laboriosam, nemo. Aut exercitationem nisi
        commodi possimus! Deleniti, quo.
      </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // Change to column to stack components vertically
    alignItems: "center",
    padding: wp("4%"), // 4% of the screen width
    flex: 1, // Make the container take the whole vertical space
  },
  profileImage: {
    width: wp("20%"), // 20% of the screen width
    height: wp("20%"), // 20% of the screen width
    borderRadius: wp("10%"), // to make it circular
    marginBottom: hp("2%"), // Space between image and details
  },
  detailsContainer: {
    flex: 1,
    alignItems: "center", // Center details horizontally
  },
  username: {
    fontSize: wp("5%"), // Adjust font size based on screen width
    fontWeight: "bold",
    marginBottom: hp("1%"), // 1% of the screen height
  },
  bio: {
    fontSize: wp("3.5%"), // Adjust font size based on screen width
    textAlign: "left",
  },
  additionalText: {
    fontSize: wp("4%"), // Adjust font size based on screen width
    color: "gray",
    textAlign: "center",
  },
});

export default ProfilePage;
