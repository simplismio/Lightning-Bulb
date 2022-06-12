import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from 'react';
import { useContext } from "react";
import ActiveWalletContext from "../contexts/ActiveWalletContext";
import useWalletFetchHook from "../hooks/useWalletFetchHook";
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";
import WalletSendReceiveButtons from './WalletSendReceiveButtonsComponent'

const WalletComponent = () => {

    let wallet: any = useContext(ActiveWalletContext);
    let response: any = useWalletFetchHook(wallet, '/v1/balance/channels');

    let navigationParamsWallets: any = [true, 'WalletOverview', 'md-chevron-up'];
    let navigationParamsTransactions: any = [false, 'WalletTransactionOverview', 'md-chevron-down', wallet];

    return (
        <View style={styles.container}>
            <View>
                <NavigationContext.Provider value={navigationParamsWallets}>
                    {response['pending'] == false ? <NavigationIconComponent /> : <Text></Text> }
                </NavigationContext.Provider> 
            </View>
            <View style={styles.walletBalance}>  
                    {response['pending'] == true && !response['error'] ? <Text></Text> : <Text style={styles.name}>{wallet}</Text>} 
                    {response['pending'] == true ? <ActivityIndicator style={styles.indicator} size="large" /> : <Text></Text>}
                    {response['pending'] == true ? <Text style={styles.status}>{response['status']}</Text> : <Text></Text>}
                {response['pending'] == false && !response['error'] ? <Text style={styles.balance}>{response['data']['json'] != undefined ?response['data']['json']['balance'] : null}</Text> : <Text></Text>}
                    {response['pending'] == false && response['error'] ? <Text style={styles.error}>{response['error']}</Text> : <Text></Text>}
                    {response['pending'] == false && !response['error'] ? <Text style={styles.sats}>Sats</Text> : <Text></Text>}
                </View>
            <View style={styles.sendReceiveButtons}>
                {response['pending'] == false ? <WalletSendReceiveButtons /> : <Text></Text>}
            </View>
            <View style={styles.transactionsIcon}>
                <NavigationContext.Provider value={navigationParamsTransactions}>
                    {response['pending'] == false ? <NavigationIconComponent /> : <Text></Text>}
                </NavigationContext.Provider> 
            </View>
            </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    walletBalance: {
        flex: 4,
        backgroundColor: 'white',
        marginTop: 150,
    },
    sendReceiveButtons: {
        flex: 1,
        backgroundColor: 'white',
    },
    transactionsIcon: {
        flex: 1,
        backgroundColor: 'white'
    },
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
    status: {
        textAlign: 'center',
        marginTop: 20
    },
    balance: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: -10
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

export default WalletComponent;