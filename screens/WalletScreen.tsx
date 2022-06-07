import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from "react";
import { View, StyleSheet } from "react-native";
import { RootStackParams } from '../App';
import Wallet from '../components/WalletComponent';
import ActiveWalletNameContext from "../contexts/WalletContext";

type Props = NativeStackScreenProps<RootStackParams, "Wallet">;

const WalletScreen: React.FC<Props> = ({ route }) => {

    return (
        <ActiveWalletNameContext.Provider value={route.params.name}>
        <View style={styles.container}>
            <Wallet />
            </View>
        </ActiveWalletNameContext.Provider> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'white'
    },
});

export default WalletScreen;