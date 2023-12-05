import { Component } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

import { CustomButtons, CustomInputs } from "../../components";

export default class SigninScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={Styles.h1}>Welcome Back !</Text>
        <Image
          style={Styles.image}
          source={require("../../assets/signupIlustration.png")}
        />
        <CustomInputs
          title="Email"
        />
        <CustomButtons
          title="Sign In"
        />
        <Text style={Styles.text}>Don't have an Account? Sign Up</Text>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  h1: {
    marginTop: 70,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "500",
  },

  image: {
    marginTop: 70,
    alignSelf: "center",
    marginBottom: 20,
  },
  text:{
    marginTop: 10,
    alignSelf: "center",
  }
});
