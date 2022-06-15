import React from "react";
import { View } from "react-native";
import WalletTransactionOverview from "../components/WalletTransactionOverviewComponent";
import ActiveWalletContext from "../contexts/ActiveWalletContext";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';
import tw from 'twrnc';

type Props = NativeStackScreenProps<RootStackParams, "Wallet">;

const WalletTransactionsOverviewScreen: React.FC<Props> = ({ route }) => {
    
    console.log(route);

    return (        
        <View style={tw`flex-5 bg-white`}>
            <ActiveWalletContext.Provider value={route.params.params}>
                <WalletTransactionOverview />
            </ActiveWalletContext.Provider>
        </View>
    );
}

export default WalletTransactionsOverviewScreen;