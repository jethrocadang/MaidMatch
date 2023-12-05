import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react';

import { 
  LandingScreen, 
  SigninScreen, 
  SignupScreen, 
  VerifyScreen,
  BookingsScreen,

 } from './screens';




export default class App extends Component {
  render() {
    return (
      <View>
      {/* <LandingScreen/> */}
      {/* <SigninScreen/> */}
      {/* <SignupScreen/> */}
      {/* <VerifyScreen/> */}
      <BookingsScreen/>
      


      </View>
    );
  }
}


