import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { CustomImage, ServiceText, CustomButtons } from "../../components";

import { Ionicons, Feather } from "@expo/vector-icons";

import { SafeAreaProvider } from 'react-native-safe-area-context';



export default class CheckBooking extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView>
         <View style={Styles.Tabheader}>
            <TouchableOpacity onPress={() => navigation.navigate("HKTab")}>
              
              <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
        
          </View>
        {/* header */}
        <View>
          <CustomImage />
          <View style={Styles.buttonContainer}>
            
          <TouchableOpacity
            style={Styles.edit}
            onPress={() => navigation.navigate("Profile")}
          >
            <Ionicons name="ios-open-outline" size={18} color="black" />
            <Text>View Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.edit}
            onPress={() => navigation.navigate("updateprofile")}
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
    padding:20,
    margin:10,
    borderRadius:10,
    backgroundColor: "white",
    shadowColor: "F86A40",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Add elevation for Android
    elevation: 5,

  },
  subContainer:{
    marginVertical:5,
    gap:5,
    paddingEnd:10
  },
  acceptDeclineContainer:{
    flexDirection: "column",
    justifyContent:"center",
    gap:10
  }
});
