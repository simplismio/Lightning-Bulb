import { View, Text, StyleSheet, Pressable} from "react-native";
import React from 'react';
import useAllWalletsDetails from "../hooks/useAllWalletsDetailsHook";
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import { Card } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import ActiveWalletContext from "../contexts/ActiveWalletContext";
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";

const WalletOverviewComponent = () => {
    let allWalletsRaw: any = useAllWalletsDetails();
    let allWallets: any = allWalletsRaw['allNodes'];
    let navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    let activeWallet: string; 
    let navigationParamsTransactions: any = [false, 'WalletCrud', 'md-add-circle-outline'];

    const onClick = async (name: any) => {
        activeWallet = name['name']
        navigation.navigate('Wallet')
    };

    console.log(allWallets == undefined);

    return (
        <ScrollView>
            <View style={styles.container}>
                    <View style={styles.list}>
                        {allWallets.length > 0 ? allWallets.map((key: any) => {
                            return (
                                <ActiveWalletContext.Provider key={key} value={activeWallet}>
                                    <Pressable key={key} onPress={() => {
                                        onClick({ name: key[1][0] })
                                    }}>
                                        <Card.Title style={styles.card}>{key[1][0]}
                                        </Card.Title>
                                    </Pressable>
                                </ActiveWalletContext.Provider>
                            )
                        }) : <Text style={styles.empty}>Please add a wallet</Text>} 
                    </View>
                <View style={styles.icon}>
                    <NavigationContext.Provider value={navigationParamsTransactions}>
                        <NavigationIconComponent />
                    </NavigationContext.Provider> 
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {
        marginTop: 50
    },
    card: {
        backgroundColor: '#F8F8F8',
        fontSize: 20,
        padding: 25,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'left'
    },
    empty: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 50
    },
    icon: {
        height: 100
    }
});

export default WalletOverviewComponent;