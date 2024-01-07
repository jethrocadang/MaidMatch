import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import AcceptedScreen from "./acceptedScreen";
import PendingScreen from "./pendingScreen";
import CheckBooking from "./checkBooking";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

class BookingTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen name="Accepted" component={AcceptedScreen} />
          <Tab.Screen name="pending" component={PendingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

class BookingStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Test"
          component={CheckBooking}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

export { BookingTabNavigator, BookingStackNavigator  };
