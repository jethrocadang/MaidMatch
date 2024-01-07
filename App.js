import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

const Stack = createStackNavigator();

import {
  LandingScreen,
  SigninScreen,
  SignupScreen,
  VerifyScreen,
  BookingsScreen,
  UpdateProfile,
  Profile,
  CheckBooking,
  HkDashboard,
  UserDashboard,
  UserBooking,
  BookingTabNavigator,
  UserChat

  
} from "./screens";

export default class App extends Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //   <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }}/>
      //   <Stack.Screen name="Login" component={SigninScreen} options={{ headerShown: false }}/>
      //   <Stack.Screen name="Register" component={SignupScreen} options={{ headerShown: false }}/>
      //   <Stack.Screen name="Verify" component={VerifyScreen} options={{ headerShown: false }}/>



      //   </Stack.Navigator>
      // </NavigationContainer>
      // <BookingsNavigator/>
      <UserChat/>

    )
  }
}

const Styles = StyleSheet.create({});
