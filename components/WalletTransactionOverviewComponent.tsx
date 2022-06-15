import { View, Text, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import React, {useContext} from 'react';
import ActiveWalletContext from "../contexts/ActiveWalletContext";
import useWalletFetchHook from "../hooks/useWalletFetchHook";
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";

const WalletTransactionOverviewComponent = () => {

    let wallet: any = useContext(ActiveWalletContext);
    let response = useWalletFetchHook(wallet, '/v1/payments');
    let transactions: any = '';

    if (response['data'] != undefined) {
        if (response['data']['json'] != undefined) {
            transactions = response['data'] != undefined ? response['data']['json']['payments'].reverse() : '';
        }
    }

    console.log(transactions == '');

    // if (response["data"]["json"] != undefined) {
    //     //console.log(response["data"]["json"]["transactions"][0]["amount"]);

    //     response["data"]["json"]["transactions"].map((key: any) => {
    //         console.log(key['amount'])
    //     });
    // }

    let navigationParams: any = ['pop', 'Wallet', 'md-chevron-up', wallet];

    return (
        <View>
            <View>
                <NavigationContext.Provider value={navigationParams}>
                    <NavigationIconComponent />
                </NavigationContext.Provider> 

                <View>
                    {transactions != '' ? response["data"]["json"]["payments"].map((key: any) => {

                        console.log(key);
                        
                        return (
                                <Text >{key['value']}</Text>
                        )
                    }) : <Text style={styles.empty}>No transactions</Text> } 
                </View>
            </View>
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
});

export default WalletTransactionOverviewComponent;