import { View, Text, StyleSheet, Pressable} from "react-native";
import React from 'react';
import useAllWalletsDetails from "../hooks/useAllWalletsDetailsHook";
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import { Card } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";

const WalletOverviewComponent = () => {
    const allWalletsRaw: any = useAllWalletsDetails();
    let allWallets: any = allWalletsRaw['allNodes'];

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <ScrollView>
        <View style={styles.container}>
            {allWallets.map((key: any) => {                            
                return (
                    <Pressable key={key} onPress={() => {
                        navigation.navigate('Wallet', { name: key[1][0] })
                    }}>

                        <Card.Title style={styles.card}>{key[1][0]}
                        </Card.Title>
                </Pressable>
)
            })} 
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 110
    },
    card: {
        backgroundColor: '#F8F8F8',
        fontSize: 20,
        padding: 25,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'left'
    }
});

export default WalletOverviewComponent;