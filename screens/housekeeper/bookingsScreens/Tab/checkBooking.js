import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { CustomImage, ServiceText, CustomButtons } from "../../../../components";

import { Ionicons, Feather } from "@expo/vector-icons";

import { SafeAreaProvider } from 'react-native-safe-area-context';



export default class CheckBooking extends Component {
  render() {
    return (
      <SafeAreaView>
        {/* header */}
        <View>
          <CustomImage />
          <View style={Styles.buttonContainer}>
            
          <TouchableOpacity
            style={Styles.edit}
            onPress={() => navigate("updateprofile")}
          >
            <Ionicons name="ios-open-outline" size={18} color="black" />
            <Text>View Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.edit}
            onPress={() => navigate("updateprofile")}
          >
            <Ionicons name="search-outline" size={18} color="black" />
            <Text>Find Location</Text>
          </TouchableOpacity>
          </View>

        </View>
        {/* Content */}
        <View style={Styles.contentContainer}>
        {/* Customer Name */}
          <View style={Styles.subContainer}>
            <Text>Customer Name</Text>
            <View style={Styles.title}>
              <Ionicons name="person-outline" size={18} color="black" />
              <Text>John Doe</Text>
            </View>
          </View>
        {/* Address */}
          <View style={Styles.subContainer}>
            <Text>Address</Text>
            <View style={Styles.title}>
              <Ionicons name="location-outline" size={18} color="black" />
              <Text numberOfLines={1} >Larlin Village, Brgy. Sampaloc, Apalit Pampanga</Text>
            </View>
          </View>
          {/* Service type */}
          <View style={Styles.subContainer}>
            <Text>Service</Text>
            <View style={Styles.title}>
              <Ionicons name="bookmark-outline" size={18} color="black" />
              <ServiceText title="Home Cleaning" type="small"/>
            </View>
          </View>
          {/* Date */}
          <View style={Styles.subContainer}>
            <Text>Date</Text>
            <View style={Styles.title}>
              <Feather name="calendar" size={18} color="black" />
              <Text>October 17, 2023</Text>
            </View>
          </View>
          {/* Time */}
          <View style={Styles.subContainer}>
            <Text>Time</Text>
            <View style={Styles.title}>
              <Feather name="clock" size={18} color="black" />
              <Text>10:00 AM</Text>
            </View>
          </View>

          




        </View>
          {/* Buttons */}
          <View style={Styles.acceptDeclineContainer}>
          <CustomButtons
            type="primary"
            size="small"
            title="Accept"
            textColor="white"
            icon={ <Feather name="check-circle" size={18} color="white" />}
          />
            <CustomButtons
            type="secondary"
            size="small"
            title="Decline"
            icon={ <Feather name="x-circle" size={18} color="#1F1F29" />}
          />
          </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  edit: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal:10,
    color: "blue",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    gap:10
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"center",
  }, 
  contentContainer:{
    padding:10,
    borderWidth:1,
    margin:10,
    borderRadius:10,

  },
  subContainer:{
    marginVertical:5
  },
  acceptDeclineContainer:{
    flexDirection: "column",
    justifyContent:"center",
    gap:10
  }
});
