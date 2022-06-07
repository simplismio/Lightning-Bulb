import { View, StyleSheet } from "react-native";
import React from 'react';
import WalletBody from './WalletBodyComponent'
import WalletSendReceiveButtons from './WalletSendReceiveButtonsComponent'
import WalletTransactionsIcon from './WalletTransactionsIconComponent'

const WalletComponent = () => {

    return (
        <View style={styles.container}>
            <View style={styles.walletBalance}>
                <WalletBody />
            </View>
            <View style={styles.sendReceiveButtons}>
                <WalletSendReceiveButtons />
            </View>
            <View style={styles.transactionsIcon}>
                <WalletTransactionsIcon />
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
});

export default WalletComponent;