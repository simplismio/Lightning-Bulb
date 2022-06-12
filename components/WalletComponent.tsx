import { View, StyleSheet } from "react-native";
import React, {useContext} from 'react';
import WalletBody from './WalletBodyComponent'
import WalletSendReceiveButtons from './WalletSendReceiveButtonsComponent'
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";
import ActiveWalletContext from "../contexts/ActiveWalletContext";

const WalletComponent = () => {

    let navigationParamsWallets: any = [true, 'WalletOverview', 'md-chevron-up'];
    let navigationParamsTransactions: any = [false, 'WalletTransactionOverview', 'md-chevron-down'];

    return (
        <View style={styles.container}>
            <View>
                <NavigationContext.Provider value={navigationParamsWallets}>
                    <NavigationIconComponent />
                </NavigationContext.Provider> 
            </View>
            <View style={styles.walletBalance}>
                <WalletBody />
                </View>
            <View style={styles.sendReceiveButtons}>
                <WalletSendReceiveButtons />
            </View>
            <View style={styles.transactionsIcon}>
                <NavigationContext.Provider value={navigationParamsTransactions}>
                    <NavigationIconComponent />
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
});

export default WalletComponent;