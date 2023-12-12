import React from "react";
import { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { TabView, TabBar } from "react-native-tab-view";

import { BookingCard } from "../../components";

export default class BookingsScreen extends Component {
  render() {

    const imageUrl = require('../../assets/profilepic.png'); // Replace with your image path

    return (
      <SafeAreaView>
        <BookingCard
          image={imageUrl}
          name="Sherline Armie"
          address="Larlin Village, Brgy. Sampaloc, Apalit Pampanga"
          service="Home Cleaning"
          date="December 1, 2023"
          time="12:19 PM"
          statusIcon="ios-checkmark-circle-outline"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
