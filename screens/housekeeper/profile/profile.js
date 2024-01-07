import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native';


import { CustomImage, ServiceText, FeedbackCard, } from "../../../components";

import { Feather } from '@expo/vector-icons';



export default class Profile extends Component {
  render() {

    const { navigation } = this.props;


    const DATA = [
      {
        id: "1",
        title: "Home Cleaning",
      },
      {
        id: "2",
        title: "Laundry",
      },
      {
        id: "3",
        title: "Gardening",
      },
    ];

    const Item = ({ title }) => <ServiceText title={title} />;

    return (
      <SafeAreaView>
        {/**Header */}
        <View style={Styles.header}>
          <CustomImage type="big" />
          <View style={Styles.description}>
            <Text style={Styles.name}>Sherline Armie</Text>
            <Text style={Styles.light}>example@email.com</Text>
            <Text numberOfLines={1} style={Styles.light}>Larlin Village, Brgy. Sampaloc, Apalit Pampanga</Text>
            <TouchableOpacity 
            style={Styles.edit}
            onPress={() => navigation.navigate('UpdateProfile')}>
                <Feather name="edit" size={18} color="black" />
                <Text>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/** */}

        {/**Services Offered */}

        <View style={Styles.serviceContainer}>
          <Text style={Styles.h2}>Services </Text>
          <FlatList
            style={Styles.flatlist}
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>

        {/**Reviews */}
        <View style={Styles.reviewContainer}>
            <Text style={Styles.h2}>Reviews</Text>
            <ScrollView 
            style={Styles.scroll}>
            <FeedbackCard
                image={require("../../../assets/profilepic.png")}
                name="John Doe"
                service="Home Cleaning"
                comment="Lorem ipsum dolor sit amet consectetur. Aliquet nisi interdum aliquam vitae orci. Vehicula massa vel dictumst est aliquam tortor. Scelerisque nibh leo dignissim iaculis eleifend a etiam adipiscing viverra."
            />
                 <FeedbackCard
                image={require("../../../assets/profilepic.png")}
                name="John Doe"
                service="Home Cleaning"
                comment="Lorem ipsum dolor sit amet consectetur. Aliquet nisi interdum aliquam vitae orci. Vehicula massa vel dictumst est aliquam tortor. Scelerisque nibh leo dignissim iaculis eleifend a etiam adipiscing viverra."
            />
            </ScrollView>
        
      

        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  description: {
    alignSelf: "center",
    width: 200,
  },
  serviceContainer:{
    padding:10,
  },
  flatlist:{
    paddingVertical:5
  },
  reviewContainer:{
    padding:10,
  },
  scroll:{
    marginVertical:10,
  },
  h2:{
    fontWeight:"600",
    fontSize:14
  },
  edit:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:10,
    color:"blue"
  },
  name: {
    fontWeight: "600",
    fontSize:15
  },
  light:{
    color: "#686060",
    fontSize:13,
    marginTop:1
  }
});
