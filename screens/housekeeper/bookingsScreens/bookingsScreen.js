import React from "react";
import { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";


import { BookingTabNavigator } from "./Tab/bookingNavigator";

export default class BookingsScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{width:'100%', height: '100%', marginTop: 10, borderTopWidth: 1, borderColor: 'lightgray' }}>
        <BookingTabNavigator/>
        </View>
      </SafeAreaView>
    );
  }
}


