import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from 'react';
import useWalletTransactions from "../hooks/useWalletTransactionsHook";

const WalletTransactionsComponent = () => {
    const lndWalletTransactions = useWalletTransactions('lndConnectDetails', '/v1/transactions');
    console.log(lndWalletTransactions['lightningTransactions']);

    return (
        <View>
            {lndWalletTransactions['pending'] == true ? <ActivityIndicator style={styles.indicator} size="large" /> : <Text ></Text>}
            {lndWalletTransactions['lightningTransactions'] == null && lndWalletTransactions['pending'] == false ? <Text>No transactions</Text> : <Text>{lndWalletTransactions['lightningTransactions']}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    indicator: {
        color: "#000000",
        marginTop: 50
    },
    walletName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
});

export default WalletTransactionsComponent;