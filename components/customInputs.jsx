import React from "react";
import { Component } from "react";
import { 
    View,
    TextInput,
    Text,
    StyleSheet
 } from "react-native";


 export default class CustomInputs extends React.Component{
    render (){
        return (
            <View style={Styles.inputContainer}>
            <Text>{this.props.title}</Text>
            <TextInput style={Styles.textInput} placeholder={this.props.placeholder} />
          </View>
        )
    }
 }

 const Styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 20,
      },
    
      textInput: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#747070",
        height: 40,
        padding: 10,
        marginTop: 2,
      },
 })