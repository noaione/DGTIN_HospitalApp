import React from "react";
import { AppRegistry, Alert } from "react-native";
import { Container, Header, Left, Body, Title, Content, Right, Button, Text } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../auth/login";
import SignupScreen from "../auth/signup";
import ForgotPasswordScreen from "../auth/forgotpassword";
import ProfileScreen from "./profile";

const Stack = createStackNavigator();

export default class ProfileData extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen name="Reset Password" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    )
  }
}