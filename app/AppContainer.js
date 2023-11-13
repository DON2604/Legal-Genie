import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "./home";
import About from "./about";
import Details from "./details";
import Signup from ".";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#009387",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
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

const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1f65ff",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
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
                <Icon name="ios-notifications" color={color} size={26} />
            ),
        }}
    />
    <Tab.Screen
    name="Settings"
    component={DetailsStackScreen}
    options={{
        tabBarLabel: "Settings",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
        ),
    }}
/>
    </Tab.Navigator>
);

export default MainTabScreen;
