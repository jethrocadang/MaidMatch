import React, { cloneElement } from "react";
import { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default class BookingCard extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={Styles.cardContainer}>
          <View style={Styles.container}>
            <Image
              source={require("../assets/profilepic.png")}
              style={Styles.image}
            />
            <View>
              <View style={Styles.textContainer}>
                <Text>Sherline Armie</Text>
              </View>
              <View style={Styles.textContainer}>
              <Ionicons name="location-outline" size={24} color="black" />
                <Text>Larlin </Text>
              </View>
              <Text style={Styles.service}>Home Cleaning</Text>
              <View style={Styles.textContainer}>
                <Feather name="calendar" size={24} color="black" />

                <Text>October 17, 2023</Text>
                <MaterialCommunityIcons
                  name="clock-time-two-outline"
                  size={24}
                  color="black"
                />
                <Text>10:00 PM</Text>
              </View>
            </View>
          </View>

          <View style={Styles.ratings}>
            <Text>Ratings</Text>
            <Text>* * * * *</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#F9E8D9",
    flexDirection: "column",
    height: 130,
    marginHorizontal: 10,
    padding: 5,
    borderWidth: 1,
    position: "absolute"

  },
  container: {
    flexDirection: "row",
    backgroundColor: "pink",
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 50,
    alignSelf: "center",
    margin: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems:"center",
  },
  service:{
    borderWidth: 1,
    marginLeft: 24,
    alignSelf: "center",
    paddingHorizontal: 3,
  },
  ratings: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: 'green',
    position: "absolute",
    justifyContent: "flex-end",
  },
});
