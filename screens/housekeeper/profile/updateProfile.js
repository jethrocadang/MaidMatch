import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

import { CustomImage, CustomInputs, CustomButtons } from "../../../components";

export default class UpdateProfile extends Component {
  render() {
    return (
      <SafeAreaView style={Styles.mainContainer}>
        <View style={Styles.header}>
          <CustomImage type="big" />
          <Text style={Styles.name}>Sherline Armie</Text>
          <Text style={Styles.light}>example@email.com</Text>
          <Text style={Styles.light}>
            Larlin Village, Brgy. Sampaloc, Apalit Pampanga
          </Text>
        </View>
        <View style={Styles.container}>
          <View style={Styles.inputs}>
            <CustomInputs 
            title="First Name" 
            placeholder="Sherline"
            type="default" />
    
          </View>
          <View style={Styles.inputs}>
            <CustomInputs 
            title="Last Name" 
            placeholder="Armie" />
          </View>
          <View style={Styles.inputs}>
            <CustomInputs 
            title="Email" 
            placeholder="example@email.com" />
          </View>
          <View style={Styles.inputs}>
            <CustomInputs
              title="Address"
              placeholder="Larlin Village, Brgy. Sampaloc, Apalit Pampanga"
            />
          </View>
        </View>
        <CustomButtons
            title="Update Profile"
        />
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
mainContainer:{
    backgroundColor:"#F9F4F4"
},
  header: {
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
  },
  light: {
    color: "#686060",
  },
  container: {
    flexDirection: "column",
    marginVertical:15,
  },
  inputs: {
    marginTop: 10,
  },
});
