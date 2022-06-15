import React from "react";
import { View } from "react-native";
import SettingsComponent from "../components/SettingsComponent";
import tw from 'twrnc';

const SettingsScreen = () => {


    return (
        <View style={tw`flex-5 bg-white`}>
                <SettingsComponent />
        </View>
    );
}

export default SettingsScreen;