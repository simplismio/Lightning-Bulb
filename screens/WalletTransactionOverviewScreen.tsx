import React from "react";
import { View, StyleSheet } from "react-native";
import WalletTransactionOverview from "../components/WalletTransactionOverviewComponent";

const WalletTransactionsOverviewScreen = () => {

    return (        
        <View style={ styles.container }>
            <WalletTransactionOverview />
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