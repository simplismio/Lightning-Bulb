import React from "react";
import { View, StyleSheet } from "react-native";
import NewWalletForm from "../components/NewWalletFormComponent";

const WalletCrudScreen = () => {

    return (
        <View style={styles.container}>
            <NewWalletForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default WalletCrudScreen;