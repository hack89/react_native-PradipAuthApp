import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import DetailScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";
import Profile from "./ProfileScreen";
import Explore from "./ExploreScreen";

// ===============================================================
//                     HOME STACK NAVIGATOR
// ===============================================================

const Stack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "white",
      headerTitleStyle: { fontWeight: "bold" },
      headerRight: () => (
        <Ionicons
          name="ios-menu"
          size={25}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Home Screen" }}
    />
  </Stack.Navigator>
);

// ===============================================================
//                     DETAILS STACK NAVIGATOR
// ===============================================================

const DetailsStack = createStackNavigator();
const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "white",
      headerTitleStyle: { fontWeight: "bold" },
      headerRight: () => (
        <Ionicons
          name="ios-menu"
          size={25}
          color="#009387"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }}
  >
    <DetailsStack.Screen name="Details" component={DetailScreen} />
  </DetailsStack.Navigator>
);

// ===============================================================
//                       TAB NAVIGATOR
// ===============================================================

const Tabs = createBottomTabNavigator();
const TabsScreen = ({ color }) => (
  <Tabs.Navigator
    shifting={true}
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: "white",
      style: {
        backgroundColor: "#009387",
      },
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-home" color={color} size={26} />
        ),
      }}
    />

    <Tabs.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Details",
        tabBarIcon: (props) => (
          <Ionicons
            name="ios-notifications"
            size={props.size}
            color={props.color}
          />
        ),
      }}
    />

    <Tabs.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: (props) => (
          <Ionicons name="ios-person" size={props.size} color={props.color} />
        ),
      }}
    />

    <Tabs.Screen
      name="Explore"
      component={Explore}
      options={{
        tabBarLabel: "Explore",
        tabBarIcon: (props) => (
          <Ionicons name="ios-settings" size={props.size} color={props.color} />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default TabsScreen;
