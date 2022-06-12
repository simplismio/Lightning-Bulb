import { View, Text, StyleSheet } from "react-native";
import React, { useRef, useState } from 'react';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import { Form, FormItem, Picker, Modal } from 'react-native-form-component';
import { Button } from '@rneui/base';
import NavigationIconComponent from "./NavigationIconComponent";
import NavigationContext from "../contexts/NavigationContext";

const NewWalletFormComponent = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    let storage = new MMKVLoader().withEncryption().initialize();

    const walletNameInput = useRef();
    const urlInput = useRef();
    const macaroonInput = useRef();

    const [interfaceName, setInterfaceName] = useState('');
    const [walletName, setWalletName] = useState('');
    const [url, setUrl] = useState('');
    const [macaroon, setMacaroon] = useState('');

    console.log(interfaceName);
    console.log(walletName);
    console.log(url);
    console.log(macaroon);

    const onSubmit = async () => {

        console.log('Ready to submit');

        var nodeDetailsObject = [{
            interface: 'Lnd',
            name: walletName,
            url: 'https://namdj63hutqhnx2nf3tu44tbq6bw64q7zbma5dq6vae66toprakyzqqd.onion:8080',
            macaroon: '0201036c6e6402f801030a108d2a861dd90e17121432311dc248787d1201301a160a0761646472657373120472656164120577726974651a130a04696e666f120472656164120577726974651a170a08696e766f69636573120472656164120577726974651a210a086d616361726f6f6e120867656e6572617465120472656164120577726974651a160a076d657373616765120472656164120577726974651a170a086f6666636861696e120472656164120577726974651a160a076f6e636861696e120472656164120577726974651a140a057065657273120472656164120577726974651a180a067369676e6572120867656e657261746512047265616400000620c827db1e3a48ecb803b3a9837e5fc7da9781805a3506681f3b766e382a1a3781',

        }
            ];

        try {
            await storage.setMapAsync(walletName, nodeDetailsObject);
            navigation.goBack;
            // navigation.navigate('WalletOverview')
        }
        catch (err: any) {
            console.log(err.message);
        }
    };

    let navigationParams: any = [true, 'WalletOverview', 'md-chevron-up'];

    return (
        <View style={styles.container}>

            <NavigationContext.Provider value={navigationParams}>
                <NavigationIconComponent />
            </NavigationContext.Provider>

            <View style={styles.form}>

                <Form style={styles.form} buttonStyle={styles.button} onButtonPress={() => onSubmit()}>
                    <Picker
                        items={[
                            { label: 'Lnd', value: 'Lnd' },
                            { label: 'LndHub', value: 'LndHub' },
                            { label: 'Eclair', value: 'Eclair' },
                        ]}
                        buttonStyle={styles.picker}
                        iconWrapperStyle={styles.pickerIcon}
                        placeholder="Interface"
                        selectedValue={interfaceName}
                        onSelection={(item) => setInterfaceName(item.value)}
                    />
                    <FormItem
                        isRequired
                        value={walletName}
                        textInputStyle={styles.input}
                        showErrorIcon={false}
                        errorBorderColor="white"
                        placeholder="Wallet Name"
                        onChangeText={(walletName) => setWalletName(walletName)}
                        asterik
                        ref={walletNameInput}
                    />
                    <FormItem
                        isRequired
                        value={url}
                        textInputStyle={styles.input}
                        showErrorIcon={false}
                        placeholder="Url"
                        onChangeText={(url) => setUrl(url)}
                        asterik
                        ref={urlInput}
                    />
                    <FormItem
                        isRequired
                        value={macaroon}
                        textInputStyle={styles.input}
                        showErrorIcon={false}
                        placeholder="Macaroon"
                        textArea={true}
                        onChangeText={(macaroon) => setMacaroon(macaroon)}
                        asterik
                        ref={macaroonInput}
                    />
                    {/* <Modal show isRequired>
                        <View style={{ }}>
                            <Text>I am inside a modal!</Text>
                        </View>
                    </Modal> */}
                </Form>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: 'white',
    },
    form: {
        marginTop: 20
    },
    input: {
        padding: 15,
        backgroundColor: "#EEEEEE",
        color: 'black',
    },
    picker: {
        backgroundColor: '#EEEEEE',
        margin: 8,
        paddingLeft: 15,
    },
    pickerIcon: {
        backgroundColor: '#EEEEEE',
    },
    button: {
        backgroundColor: 'black',
        color: 'black',
        padding: 10,
        marginTop: 5,
        margin: 8
    },
    error: {
        marginTop: -15,
        marginLeft: 10,
        color: 'red'
    },
});

export default NewWalletFormComponent;