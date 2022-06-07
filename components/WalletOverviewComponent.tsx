import { View, Text, StyleSheet, Pressable } from "react-native";
import React from 'react';
import useAllWalletDetails from "../hooks/useAllWalletDetailsHook";
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

const WalletOverviewComponent = () => {
    const allNodesRaw: any = useAllWalletDetails();
    let allNodes: any = allNodesRaw['allNodes'];

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();


    return (
        <View style={styles.container}>
            {allNodes.map((key: any) => {                            
                return (
                    <Pressable key={key} onPress={() => {
                        navigation.navigate('Wallet', { name: key[1][0] })
                    }}>
                <Text key={key}>{ key[1][0] }
                </Text>
                </Pressable>
)
            })} 
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    walletName: {
        flex: 1,
        color: 'black',
        backgroundColor: 'white',
        marginTop: 150,
    },
    walletBalance: {
        flex: 4,
        backgroundColor: 'white',
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

export default WalletOverviewComponent;