import React, {Component} from "react";
import { View } from "react-native";
import { BookingCard } from "../../../../components";


export default class AcceptedScreen extends Component {
    render(){

        const { navigation } = this.props;

        const handleBtnPress = () => navigation.navigate("Test")        
        
        return(

            <BookingCard
                name="Sherline Armie"
                address="Larlin Village, Brgy. Sampaloc, Apalit Pampanga"
                service="Home Cleaning"
                date="October 1 2023"
                time="10:00 AM"
                onPress={handleBtnPress}
            />
        )
    }
}