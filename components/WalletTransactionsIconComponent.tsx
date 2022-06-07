import { View, StyleSheet } from "react-native";
import React from 'react';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

const WalletTransactionsIconComponent = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <View>
            <Icon
                name='md-chevron-up'
                type='ionicon'
                size={50}
                style={styles.centerButton}
                onPress={() => {
                    navigation.navigate('WalletTransactions', { name: 'Joost' })
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    centerButton: {
        marginTop: 20,
        textAlign: 'center',
        color: 'black'
    }
});

export default WalletTransactionsIconComponent;
