import React from "react";
import { View } from "react-native";
import NewWalletForm from "../components/NewWalletFormComponent";


const WalletCrudScreen = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <NewWalletForm />
        </View>
    );
}

export default WalletCrudScreen;