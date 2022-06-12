import { View, StyleSheet } from "react-native";
import React, { useContext} from 'react';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import NavigationContext from "../contexts/NavigationContext";

const NavigationIconComponent = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    let navigationParams: any = useContext(NavigationContext);
    let back: boolean = navigationParams[0] ;
    let direction: any = navigationParams[1];
    let icon: any = navigationParams[2];
    let params: any = navigationParams[3] != null ? navigationParams[3] : null

    return (
        <View>
            {back == true ? <Icon
                name={icon}
                type='ionicon'
                size={50}
                style={styles.icon}
                onPress={() => {
                    params != null ? navigation.navigate(direction, { params: params }) : navigation.navigate(direction) //TODO: include option to push and pop
                }}
            /> : <Icon
                    name={icon}
                type='ionicon'
                size={50}
                style={styles.icon}
                onPress={() => {
                    params != null ? navigation.navigate(direction, { params: params }) : navigation.navigate(direction) //TODO: include option to push and pop
                }}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginTop: 20,
        textAlign: 'center',
        color: 'black'
    }
});

export default NavigationIconComponent;
