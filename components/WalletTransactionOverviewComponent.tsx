import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, {useContext} from 'react';
import ActiveWalletContext from "../contexts/ActiveWalletContext";
import useWalletTransactionsHook from "../hooks/useWalletTransactionsHook";
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";

const WalletTransactionOverviewComponent = () => {

    let wallet: string = useContext(ActiveWalletContext);

    //let transactions = useWalletTransactionsHook(wallet, '/v1/transactions');

    let navigationParams: any = [true, 'Wallet', 'md-chevron-up'];

    return (
        <View>
            <View>
                <NavigationContext.Provider value={navigationParams}>
                    <NavigationIconComponent />
                </NavigationContext.Provider> 
            </View>
            {/* {transactions['pending'] == true ? <ActivityIndicator style={styles.indicator} size="large" /> : <Text ></Text>}
            {transactions['lightningTransactions'] == null && transactions['pending'] == false ? <Text>No transactions</Text> : <Text>{transactions['lightningTransactions']}</Text>} */}
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

export default WalletTransactionOverviewComponent;