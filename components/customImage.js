import React, {Component} from "react";
import { Image, View, StyleSheet } from "react-native";

export default class CustomImage extends React.Component {
    render (){

        const selectedStyle = this.props.type === 'big' ? Styles.big : Styles.small;

        return (
            <View>
                <Image
                    source={require('/Users/jethrocadang/Desktop/MaidMatch/assets/profilepic.png')}
                    style={selectedStyle}
                />
            </View>
        )
    }
}
 

const Styles= StyleSheet.create({
    small: {
        height: 90,
        width: 90,
        borderRadius: 50,
        alignSelf: "center",
        margin: 10,
      },

    big:{
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: "center",
        margin: 10,
    }
})

