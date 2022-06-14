import React from "react";
import { View, StyleSheet } from "react-native";
import SettingsComponent from "../components/SettingsComponent";

const SettingsScreen = () => {


    return (
            <View style={styles.container}>
                <SettingsComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'white'
    },
});

export default SettingsScreen;