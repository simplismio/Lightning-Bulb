import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from 'react';
import useLndBalance from "../hooks/useWalletBalanceHook";
import { useContext } from "react";
import useLoadWalletDetails from "../hooks/useLoadWalletDetailsHook";
import ActiveWalletNameContext from "../contexts/WalletContext";

const WalletBodyComponent = () => {

    const wallet: string = useContext(ActiveWalletNameContext);

    const walletDetails = useLoadWalletDetails(wallet);
    const walletBalance = useLndBalance(walletDetails['url'], walletDetails['macaroon'], '/v1/balance/channels');

    return (
        <View>
            {walletBalance['pending'] == true ? <Text></Text> : <Text style={styles.title}>{walletDetails['name']}</Text>}
            {walletBalance['pending'] == true ? <ActivityIndicator style={styles.indicator} size="large" /> : <Text style={styles.title}>{walletBalance['lightningBalance']}</Text>}
            {walletBalance['error'] != null ? <Text style={styles.title}>{walletBalance['error']}</Text> : <Text style={styles.title}></Text>}
            {walletBalance['pending'] == true ? <Text style={styles.title}></Text> : <Text style={styles.subtitle}>Sats</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    indicator: {
        color: "#000000",
        marginTop: 50
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center',
        marginTop: 70,
        marginBottom: -40
    },
    subtitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default WalletBodyComponent;