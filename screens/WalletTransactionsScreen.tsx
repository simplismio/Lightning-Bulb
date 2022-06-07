import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParams } from "../App";
import WalletTransactions from "../components/WalletTransactionsComponent";

type Props = NativeStackScreenProps<RootStackParams, "WalletTransactions">;

const WalletTransactionsScreen: React.FC<Props> = ({ route }) => {

    return (        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.params.name}</Text>
            <WalletTransactions />
        </View>
    );
}

export default WalletTransactionsScreen;