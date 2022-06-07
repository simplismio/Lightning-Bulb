import { View, Text, StyleSheet } from "react-native";
import React from 'react';
import useWalletName from "../hooks/useWalletName";
import { useState, createContext, useContext } from "react";


const ApiContext = (node: any) => {
    const lndWalletName = useWalletName('lndConnectDetails');
    console.log(node);
    //const node = useContext(NodeContext);

    return (
        <View>
            <Text style={styles.walletName}>{lndWalletName["walletName"]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    walletName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
});

export default ApiContext;