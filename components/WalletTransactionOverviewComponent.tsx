import { View, Text, ActivityIndicator } from "react-native";
import React, {useContext} from 'react';
import ActiveWalletContext from "../contexts/ActiveWalletContext";
import useWalletFetchHook from "../hooks/useWalletFetchHook";
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";
import tw from 'twrnc';

const WalletTransactionOverviewComponent = () => {

    let wallet: any = useContext(ActiveWalletContext);
    let response = useWalletFetchHook(wallet, '/v1/payments');
    let payments: any = '';

    if (response['data'] != undefined) {
        if (response['data']['json'] != undefined) {
            payments = response['data'] != undefined ? response['data']['json']['payments'].reverse() : '';
        }
    }

    let navigationParams: any = ['pop', 'Wallet', 'md-chevron-up', wallet];

    return (
        <View style={tw`flex-1`}>
            <View>
                <NavigationContext.Provider value={navigationParams}>
                    {response['pending'] == false ? <NavigationIconComponent /> : <Text></Text>}
                </NavigationContext.Provider>
            </View>
            <View style={tw`mt-15`}>
                {response['pending'] == false && !response['error'] ? <Text style={tw`text-xl text-center font-bold`}>Payments</Text> : <Text></Text>}
            </View>
            <View style={tw`flex-4 mt-5`}>
                {response['pending'] == true ? <ActivityIndicator style={tw`mt-50`} size="large" /> : <Text></Text>}
                {response['pending'] == true ? <Text style={tw`text-base mt-3 text-center`}>{response['status']}</Text> : <Text></Text>}
                {response['pending'] == false && payments != '' ? response["data"]["json"]["payments"].map((key: any) => {
                    return (
                        <Text style={tw`text-lg text-center`}>{key['value']}</Text>)
                }) : <Text></Text>}
                {response['pending'] == false && response['error'] ? <Text style={tw`text-xl text-red mt-2 text-center`}>{response['error']}</Text> : <Text></Text>}
                {payments == '' && response['pending'] == false ? <Text style={tw`text-xl text-red mt-2 text-center`}>Could not connect to wallet</Text> : <Text></Text>}
            </View>
        </View>
    );
}

export default WalletTransactionOverviewComponent;