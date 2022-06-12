import React from "react";
import { View, StyleSheet } from "react-native";
import WalletTransactionOverview from "../components/WalletTransactionOverviewComponent";
import ActiveWalletContext from "../contexts/ActiveWalletContext";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';

type Props = NativeStackScreenProps<RootStackParams, "Wallet">;

const WalletTransactionsOverviewScreen: React.FC<Props> = ({ route }) => {
    
    console.log(route);

    return (        
        <View style={styles.container}>
            <ActiveWalletContext.Provider value={route.params.params}>
                <WalletTransactionOverview />
            </ActiveWalletContext.Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'white'
    },
});

export default WalletTransactionsOverviewScreen;