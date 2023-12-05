import React from "react";
import { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

import { CustomButtons, CustomInputs } from "../../components";

export default class SignupScreen extends Component {
  /** User Type Client & Houskeeper */

  state = {
    value: null,
    isFocus: false,
  };

  data = [
    { id: 1, label: "Housekeeper" },
    { id: 2, label: "Client" },
  ];

  handlePress = (item) => {
    this.setState({ value: item.label, isFocus: false });
  };

  render() {
    const { value, isFocus } = this.state;

    return (
      <SafeAreaView>
        <View>
          <Text style={Styles.h1}>Create Account</Text>

          <Image
            source={require("../../assets/createaccount-icon.png")}
            style={Styles.image}
          />

          <View style={Styles.inputsContainer}>
            <CustomInputs title="First Name" placeholder="John" />
            <CustomInputs title="Last Name" placeholder="Doe" />
            <CustomInputs title="Email" placeholder="example@email.com" />
            <CustomInputs title="Address" />
          </View>
          <TouchableOpacity
            style={Styles.dropdownButton}
            onPress={() => this.setState({ isFocus: !isFocus })}
          >
            <Text>{value || "Select an option"}</Text>
          </TouchableOpacity>
          {isFocus && (
            <FlatList
              data={this.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={Styles.option}
                  onPress={() => this.handlePress(item)}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          <Text style={Styles.bottomText}>I Agree to MaidMatch Terms and Conditions</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  h1: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "500",
    marginTop: 40,
  },
  image: {
    alignSelf: "center",
    marginVertical: 15,
  },
  inputsContainer:{
    rowGap:5,

  },
  dropdownButton: {
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginHorizontal: 20,
  },
  bottomText:{
    alignSelf:"center",
    marginTop: 10,
  }
});
