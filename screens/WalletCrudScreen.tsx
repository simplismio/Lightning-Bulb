import React from "react";
import { View } from "react-native";
import NewWalletForm from "../components/NewWalletFormComponent";
import tw from 'twrnc';

const WalletCrudScreen = () => {

    return (
        <View style={tw`flex-1 bg-white`}>
            <NewWalletForm />
        </View>
    );
}

export default WalletCrudScreen;