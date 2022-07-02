import { View, Text, ActivityIndicator } from "react-native";
import React, {useContext} from 'react';
import ActiveWalletContext from "../contexts/ActiveWalletContext";
import useWalletFetchHook from "../hooks/useWalletFetchHook";
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";
import tw from 'twrnc';
import { ScrollView } from "react-native-gesture-handler";

const WalletTransactionOverviewComponent = () => {

    let wallet: any = useContext(ActiveWalletContext);
    let response = useWalletFetchHook(wallet, '/v1/payments');
    let payments: any = '';

    if (response['data'] != undefined) {
        if (response['data']['json'] != undefined) {
            payments = response['data'] != undefined ? response['data']['json']['payments'].reverse() : '';
        }
    }

    let navigationParamsBack: any = ['pop', 'Wallet', 'md-chevron-up', wallet];
    let navigationParamsRetry: any = ['replace', 'Wallet', 'md-reload-outline', wallet];

    return (
        <View style={tw`flex-1`}>
            <View>
                <NavigationContext.Provider value={navigationParamsBack}>
                    {response['pending'] == false ? <NavigationIconComponent /> : <Text></Text>}
                </NavigationContext.Provider>
            </View>
            <View style={tw`flex-5 mt-30`}>
                <ScrollView>
                    {response['pending'] == false && !response['error'] ? <Text style={tw`text-xl mt-10 text-center font-bold`}>Payments</Text> : <Text></Text>}
                    {response['pending'] == true ? <ActivityIndicator style={tw`mt-50`} size="large" /> : <Text></Text>}
                    {response['pending'] == true ? <Text style={tw`text-base mt-3 text-center`}>{response['status']}</Text> : <Text></Text>}
                    {response['pending'] == false && payments != '' ? response["data"]["json"]["payments"].map((key: any) => {
                        return (
                            <Text style={tw`text-lg text-center`}>{key['value']}</Text>)
                    }) : <Text></Text>}
                        <NavigationContext.Provider value={navigationParamsRetry}>
                            {response['pending'] == false && response['error'] != null ? <Text style={tw`text-xl mt-15 text-center`}>Could not connect. Please retry</Text> : <Text></Text>}
                            {response['pending'] == false && response['error'] != null ? <NavigationIconComponent /> : <Text></Text>}
                        </NavigationContext.Provider>
                </ScrollView>
                </View>
        </View>
    );
}

export default WalletTransactionOverviewComponent;