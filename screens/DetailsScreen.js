import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

const DetailScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Details screen</Text>
    <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
  </View>
);

export default DetailScreen;
