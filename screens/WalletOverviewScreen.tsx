import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NewWalletIconComponent from "../components/NewWalletIconComponent";
import WalletOverview from "../components/WalletOverviewComponent";

const WalletOverviewScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View>
            <WalletOverview />
        </View>
            </View>
            <View style={styles.footer}>
                <NewWalletIconComponent />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    },
    footer: {
        height: 100
    }
});

export default WalletOverviewScreen;