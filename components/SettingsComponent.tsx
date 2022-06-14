import { View, Text, StyleSheet } from "react-native";
import React from 'react';
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";
import tw from 'twrnc';

const SettingsComponent = () => {

    let navigationParams: any = ['replace', 'WalletOverview', 'md-chevron-down'];

    return (
        <View style={tw`flex-1 mt-5 items-center`}>
            <View style={tw`flex-1`}><Text style={tw`pt-20 text-xl font-black text-center`}>Settings</Text></View>
            <View style={tw`items-center`}>
            <NavigationContext.Provider value={navigationParams}>
                {<NavigationIconComponent />}
                </NavigationContext.Provider> 
            </View>
        </View>
    );
}

export default SettingsComponent;