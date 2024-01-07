import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BookingTopNavigator from "./bookingNavigator";
import CheckBooking from "./checkBooking";
import AcceptedScreen from "./acceptedScreen";
import PendingScreen from "./pendingScreen";

const Stack = createStackNavigator();

export default class BookingsNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
      
        <Stack.Screen
          name="Check Bookings"
          component={CheckBooking}
          options={{ headerShown: false }}
        />
        
    
      </NavigationContainer>
    );
  }
}
