import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import "react-native-gesture-handler";

import { Profile } from "./profile";
import { UpdateProfile } from "./updateProfile";

const Stack = createStackNavigator();

export default class ProfileNavigator extends Component {
  render() {
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      </Stack.Navigator>
    </NavigationContainer>;
  }
}
