import { View, Text, ActivityIndicator } from "react-native";
import React from 'react';
import { useContext } from "react";
import ActiveWalletContext from "../contexts/ActiveWalletContext";
import useWalletFetchHook from "../hooks/useWalletFetchHook";
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";
import WalletSendReceiveButtons from './WalletSendReceiveButtonsComponent'
import tw from 'twrnc';

const WalletComponent = () => {

    let wallet: any = useContext(ActiveWalletContext);
    let response: any = useWalletFetchHook(wallet, '/v1/balance/channels');
    let balance: string = '';


    let navigationParamsWallets: any = ['pop', 'WalletOverview', 'md-chevron-up'];
    let navigationParamsTransactions: any = ['push', 'WalletTransactionOverview', 'md-chevron-down', wallet];

    if (response['data'] != undefined) {
        if (response['data']['json'] != undefined) {
            balance = response['data'] != undefined ? response['data']['json']['balance'] : '';
        }
    }

    return (
        <View style={tw`flex-1`}>
            <View>
                <NavigationContext.Provider value={navigationParamsWallets}>
                    {response['pending'] == false ? <NavigationIconComponent /> : <Text></Text> }
                </NavigationContext.Provider> 
            </View>
            <View style={tw`flex-4 mt-30`}>  
                {response['pending'] == false && !response['error'] ? <Text style={tw`text-lg text-center font-semibold`}>{wallet}</Text> : <Text></Text>} 
                {response['pending'] == true ? <ActivityIndicator style={tw`mt-50`} size="large" /> : <Text></Text>}
                {response['pending'] == true ? <Text style={tw`text-base mt-3 text-center`}>{response['status']}</Text> : <Text></Text>}
                {response['pending'] == false && !response['error'] ? <Text style={tw`text-5xl mt-10 text-center font-black`}>{balance != '' ? balance : null}</Text> : <Text></Text>}
                {response['pending'] == false && response['error'] ? <Text style={tw`text-xl text-red mt-2 text-center`}>{response['error']}</Text> : <Text></Text>}
                {balance != '' && response['pending'] == false && !response['error'] ? <Text style={tw`text-xl mt--5 text-center`}>Sats</Text> : <Text></Text>}
                {balance == '' && response['pending'] == false ? <Text style={tw`text-xl text-red mt-2 text-center`}>Could not connect to wallet</Text> : <Text></Text>}
                </View>
            <View style={tw`flex-1`}>
                {balance != '' && response['pending'] == false ? <WalletSendReceiveButtons /> : <Text></Text>}
            </View>
            <View style={tw`flex-1`}>
                <NavigationContext.Provider value={navigationParamsTransactions}>
                    {balance != '' && response['pending'] == false ? <NavigationIconComponent /> : <Text></Text>}
                </NavigationContext.Provider> 
            </View>
            </View>
    );
}

export default WalletComponent;