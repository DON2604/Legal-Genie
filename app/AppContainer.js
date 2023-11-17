import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "./home";
import About from "./about";
import ContactUs from "./contactUs";

const HomeStack = createStackNavigator();
const ContactUsStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
        headerShown: false,
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: "Overview",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = () => (
  <DetailsStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <DetailsStack.Screen
      name="About"
      component={About}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ContactUsStackScreen = () => (
    <ContactUsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ContactUsStack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
            ></Icon.Button>
          ),
        }}
      />
    </ContactUsStack.Navigator>
  );

  const MainTabScreen = () => (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: "About",
          tabBarColor: "#1f65ff",
          tabBarIcon: ({ color }) => (
            <Icon name="git-compare" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#1f65ff",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ContactUs"
        component={ContactUsStackScreen}
        options={{
          tabBarColor: "#1f65ff",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-mail" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );

export default MainTabScreen;
