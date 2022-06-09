import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from 'react';
import useWalletBalanceHook from "../hooks/useWalletBalanceHook";
import { useContext } from "react";
import ActiveWalletContext from "../contexts/ActiveWalletContext";

const WalletBodyComponent = () => {

    let wallet: string = useContext(ActiveWalletContext);
    let balance: any = useWalletBalanceHook(wallet, '/v1/balance/channels');

    return (
        <View>
            {balance['pending'] == true ? <Text></Text> : <Text style={styles.name}>{wallet}</Text>}
            {balance['pending'] == true ? <ActivityIndicator style={styles.indicator} size="large" /> : <Text style={styles.title}>{balance['balance']}</Text>}
            {balance['errorDetails'] != null ? <Text style={styles.title}>{balance['errorDetails']}</Text> : <Text style={styles.title}></Text>}
            {balance['pending'] == true ? <Text style={styles.title}></Text> : <Text style={styles.subtitle}>Sats</Text>}
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
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: -30
    },
    subtitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default WalletBodyComponent;