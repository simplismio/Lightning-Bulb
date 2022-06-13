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
    let action: string = navigationParams[0];
    let route: any = navigationParams[1] != null ? navigationParams[1] : null
    let icon: string = navigationParams[2];
    let params: any = navigationParams[3] != null ? navigationParams[3] : null

    return (
        <View>
           <Icon
                name={icon}
                type='ionicon'
                size={50}
                style={styles.icon}
                onPress={() => {
                    switch (action) {
                        case 'navigate':
                            params != null ? navigation.navigate(route, { params: params }) : navigation.navigate(route)
                            break;
                        case 'push':
                            params != null ? navigation.push(route, { params: params }) : navigation.push(route)
                            break;
                        case 'replace':
                            params != null ? navigation.replace(route, { params: params }) : navigation.replace(route)
                            break;
                        case 'pop':
                            params != null ? navigation.pop() : navigation.pop()
                            break;
                        default:
                    }
                }}
            /> 
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
