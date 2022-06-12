import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from 'react';
import useWalletBalanceHook from "../hooks/useWalletBalanceHook";
import { useContext } from "react";
import ActiveWalletContext from "../contexts/ActiveWalletContext";

const WalletBodyComponent = () => {

    let wallet: any = useContext(ActiveWalletContext);
    let balance: any = useWalletBalanceHook(wallet, '/v1/balance/channels');

    return (
        <View>
            {balance['pending'] == true && balance['error'] == null? <Text></Text> : <Text style={styles.name}>{wallet}</Text>}
            {balance['pending'] == true ? <ActivityIndicator style={styles.indicator} size="large" /> : <Text></Text>}
            {balance['pending'] == false && balance['error'] == null ? <Text style={styles.balance}>{balance['balance']}</Text> : <Text></Text>}
            {balance['pending'] == false && balance['error'] != null ? <Text style={styles.error}>{balance['error']}</Text> : <Text></Text>}
            {balance['pending'] == false && balance['error'] == null ? <Text style={styles.sats}>Sats</Text> : <Text></Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    indicator: {
        color: "#000000",
        marginTop: 50
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    balance: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: -30
    },
    sats: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    }
});

export default WalletBodyComponent;