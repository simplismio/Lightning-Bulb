import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from "react";
import { View } from "react-native";
import { RootStackParams } from '../App';
import Wallet from '../components/WalletComponent';
import ActiveWalletContext from '../contexts/ActiveWalletContext';
import tw from 'twrnc';

type Props = NativeStackScreenProps<RootStackParams, "Wallet">;

const WalletScreen: React.FC<Props> = ({ route }) => {

    return (
        <ActiveWalletContext.Provider value={route.params.params}>
            <View style={tw`flex-5 bg-white`}>
            <Wallet />
            </View>
        </ActiveWalletContext.Provider>

    );
}

export default WalletScreen;