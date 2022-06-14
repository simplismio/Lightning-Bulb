import { View, Text, Pressable} from "react-native";
import React from 'react';
import useAllWalletsDetails from "../hooks/useAllWalletsDetailsHook";
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import { ScrollView } from "react-native-gesture-handler";
import NavigationContext from "../contexts/NavigationContext";
import NavigationIconComponent from "./NavigationIconComponent";
import tw from 'twrnc';

const WalletOverviewComponent = () => {
    let allWalletsRaw: any = useAllWalletsDetails();
    let allWallets: any = allWalletsRaw['allNodes'];

    let navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    let navigationParamsTransactions: any = ['push', 'WalletCrud', 'md-chevron-down'];
    let activeWallet: string; 


    const onClick = async (name: any) => {
        activeWallet = name['name']
        navigation.push('Wallet', { params: activeWallet })
    };

    let navigationParams: any = ['navigate', 'Settings', 'md-chevron-up'];

    return (
        <ScrollView>
            <View style={tw`flex-1`}>
                <NavigationContext.Provider value={navigationParams}>
                    { <NavigationIconComponent />}
                </NavigationContext.Provider> 
                <View><Text style={tw`pt-5 text-xl font-black text-center`}>Wallets</Text></View>
                <View style={tw`flex-1 mt-5 items-center`}>
                    {allWallets.length > 0 ? allWallets.map((key: any) => {
                            return (
                                <Pressable key={key} onPress={() => {
                                        onClick({ name: key[1][0]["name"] })
                                }}>
                                    <Text style={tw`ml-8 mr-10 p-3 text-left text-lg`}>{key[1][0]["name"]}
                                        </Text>
                                    </Pressable>
                            )
                        }) : <Text>Please add a wallet</Text>} 
            </View>
            <View style={tw``}>
                    <NavigationContext.Provider value={navigationParamsTransactions}>
                        <NavigationIconComponent />
                    </NavigationContext.Provider> 
            </View>
            </View>
        </ScrollView>
    );
}

export default WalletOverviewComponent;