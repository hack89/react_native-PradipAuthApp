import React, { useState, useEffect, useReducer, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "./components/context";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./screens/MainTabScreen";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import { DrawerContent } from "./screens/DrawerContent";

import { AsyncStorage } from "react-native";

import RootStackScreen from "./screens/RooStackScreen";
import { View, ActivityIndicator } from "react-native";
// ===============================================================
//                       APP DRAWER NAVIGATOR
// ===============================================================

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <AppDrawer.Screen
      component={MainTabScreen}
      name="Drawer"
      options={{ title: "Home" }}
    />
    <AppDrawer.Screen name="Support" component={SupportScreen} />
    <AppDrawer.Screen name="Settings" component={SettingsScreen} />
    <AppDrawer.Screen name="Bookmarks" component={BookmarkScreen} />
  </AppDrawer.Navigator>
);

// ===============================================================
//                       APP COMPONENT
// ===============================================================
const App = () => {
  const initialState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (state, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...state,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(loginReducer, initialState);

  const authContext = useMemo(
    () => ({
      signIn: async (foundUser) => {
        const userToken = String(foundUser[0].userToken);
        const userName = String(foundUser[0].username);
        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (error) {
          console.log(error);
        }

        dispatch({
          type: "LOGIN",
          id: userName,
          token: userToken,
        });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (error) {
          console.log(error);
        }
        dispatch({
          type: "LOGOUT",
        });
      },
      signUp: () => {},
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.log(error);
      }

      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (state.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken !== null ? <AppDrawerScreen /> : <RootStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
