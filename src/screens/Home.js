import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import Resto from "../components/Resto";
import Details from "../components/Details";

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Resto" component={Resto} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
