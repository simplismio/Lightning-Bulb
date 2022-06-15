import { View, Pressable, Text } from "react-native";
import React from 'react';
import tw from 'twrnc';

const WalletSendReceiveButtonsComponent = () => {

    return (
        <View style={tw`flex flex-row justify-center`}>
            <Pressable style={tw`bg-black pt-5 pb-5 pl-10 pr-10 rounded-md mr-2 min-w-30`}>
                <Text style={tw`text-center text-white text-xl font-bold`}>Receive</Text>
            </Pressable>
            <Pressable style={tw`bg-black pt-5 pb-5 pl-10 pr-10 rounded-md ml-2 min-w-38`}>
                <Text style={tw`text-center text-white text-xl font-bold`}>Send</Text>
            </Pressable>
        </View>
    );
}

export default WalletSendReceiveButtonsComponent;