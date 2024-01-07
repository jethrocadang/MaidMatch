import React from "react";
import { Component } from "react";
import { View, SafeAreaView, Text, TextInput, StyleSheet } from "react-native";

import { CustomButtons } from "../../components";

export default class VerifyScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={Styles.container}>
          <Text style={Styles.text}> We sent a code to your Email</Text>
          <View style={Styles.inputsContainer}>
            <TextInput
              style={Styles.input}
              placeholder="5"
              keyboardType="numeric"
              maxLength={1}
              value=""
            />
            <TextInput
              style={Styles.input}
              keyboardType="numeric"
              maxLength={1}
              value=""
            />
            <TextInput
              style={Styles.input}
              keyboardType="numeric"
              maxLength={1}
              value=""
            />
            <TextInput
              style={Styles.input}
              keyboardType="numeric"
              maxLength={1}
              value=""
            />
            <TextInput
              style={Styles.input}
              keyboardType="numeric"
              maxLength={1}
              value=""
            />
          </View>
          <View style={Styles.Btn}> 
          <CustomButtons
            type="primary"
            size="small"
            textColor="white"
            title="Verify"
          />

          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({

  container:{
    marginTop: "60%",
    
  },
  text:{
    alignSelf:"center",
    marginVertical: 50,
    fontSize: 15,
  },
  inputsContainer: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    marginHorizontal: 20,
    height: 50,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#747070",
    padding: 20,
    fontSize: 25,
  },
  Btn:{
    marginTop:40
  }
});
