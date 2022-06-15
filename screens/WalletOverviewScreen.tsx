import React from "react";
import { View } from "react-native";
import WalletOverview from "../components/WalletOverviewComponent";
import tw from 'twrnc';

const WalletOverviewScreen = () => {

    return (
        <View style={tw`flex-1 bg-white`}>
            <WalletOverview />
        </View>
    );
};

export default WalletOverviewScreen;