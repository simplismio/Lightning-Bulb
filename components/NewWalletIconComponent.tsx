import { View, StyleSheet } from "react-native";
import React from 'react';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

const NewWalletIconComponent = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <View style={styles.buttonContainer}>
            <Icon
                name='md-add-circle-outline'
                type='ionicon'
                size={70}
                style={styles.button}
                onPress={() => {
                    navigation.navigate('WalletCrud', { action: 'new' })
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        marginTop: 20,
        color: 'black',
        marginRight: 20
    }
});

export default NewWalletIconComponent;
