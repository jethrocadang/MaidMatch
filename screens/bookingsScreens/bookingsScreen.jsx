import React from "react";
import { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { TabView, TabBar } from "react-native-tab-view";

import { BookingCard } from "../../components";



export default class BookingsScreen extends Component {

  render() {
    return (
      <SafeAreaView>
            <BookingCard/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

});
