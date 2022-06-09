import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from "react";
import { View, StyleSheet } from "react-native";
import { RootStackParams } from '../App';
import Wallet from '../components/WalletComponent';
import ActiveWalletContext from '../contexts/ActiveWalletContext';

type Props = NativeStackScreenProps<RootStackParams, "Wallet">;

const WalletScreen: React.FC<Props> = ({ route }) => {

    //TODO: move context to component and remove routing variable

    return (
        <View style={styles.container}>
            <Wallet />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'white'
    },
});

export default WalletScreen;