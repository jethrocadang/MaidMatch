import React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class CustomButtons extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
 button:{
    backgroundColor: "#1F1F29",
    marginHorizontal: 20,
    marginTop: 20,
    height:40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
 },

 buttonText:{
  color: "white",
  fontSize: 15,
  fontWeight: "600",
 }
 
})
