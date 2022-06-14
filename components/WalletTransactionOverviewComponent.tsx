import { View, Text, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import React, {useContext} from 'react';
import ActiveWalletContext from "../contexts/ActiveWalletContext";
import useWalletFetchHook from "../hooks/useWalletFetchHook";
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";

const WalletTransactionOverviewComponent = () => {

    let wallet: any = useContext(ActiveWalletContext);
    let response = useWalletFetchHook(wallet, '/v1/transactions');

    if (response["data"]["json"] != undefined) {
        //console.log(response["data"]["json"]["transactions"][0]["amount"]);

        response["data"]["json"]["transactions"].map((key: any) => {
            console.log(key['amount'])
        });


    }

    let navigationParams: any = ['pop', 'Wallet', 'md-chevron-up', wallet];

    return (
        <View>
            <Text>Ok</Text>
            <View>
                <NavigationContext.Provider value={navigationParams}>
                    <NavigationIconComponent />
                </NavigationContext.Provider> 
                {/* <View>
                    {response["data"]["json"] != undefined ? response["data"]["json"]["transactions"].length > 0 ? response["data"]["json"]["transactions"].map((key: any) => {

                        // console.log(key);
                        
                        return (
                                <Card.Title >{key}
                                </Card.Title>
                        )
                    }) : <Text style={styles.empty}>No transactions</Text> : <Text>Undefined</Text>} 
                </View> */}
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