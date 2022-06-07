import { View, Pressable, Text, StyleSheet } from "react-native";
import React from 'react';

const WalletSendReceiveButtonsComponent = () => {

    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Receive</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Send</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: 'black',
        width: 150,
        margin: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default WalletSendReceiveButtonsComponent;
