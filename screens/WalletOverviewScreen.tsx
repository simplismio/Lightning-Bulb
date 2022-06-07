import React from "react";
import { View, StyleSheet } from "react-native";
import WalletOverview from "../components/WalletOverviewComponent";

const WalletOverviewScreen = () => {

    return (
        <View style={styles.container}>
            <WalletOverview />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'white'
    },
});

export default WalletOverviewScreen;