import { View, Text } from "react-native";
import React, { useRef, useState } from 'react';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import { Form, FormItem, Picker } from 'react-native-form-component';
import NavigationIconComponent from "./NavigationIconComponent";
import NavigationContext from "../contexts/NavigationContext";
import tw from 'twrnc';

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

    const onSubmit = async () => {

        var nodeDetailsObject = [{
            interface: 'Lnd',
            name: walletName,
            url: 'https://namdj63hutqhnx2nf3tu44tbq6bw64q7zbma5dq6vae66toprakyzqqd.onion:8080',
            macaroon: '0201036c6e6402f801030a108d2a861dd90e17121432311dc248787d1201301a160a0761646472657373120472656164120577726974651a130a04696e666f120472656164120577726974651a170a08696e766f69636573120472656164120577726974651a210a086d616361726f6f6e120867656e6572617465120472656164120577726974651a160a076d657373616765120472656164120577726974651a170a086f6666636861696e120472656164120577726974651a160a076f6e636861696e120472656164120577726974651a140a057065657273120472656164120577726974651a180a067369676e6572120867656e657261746512047265616400000620c827db1e3a48ecb803b3a9837e5fc7da9781805a3506681f3b766e382a1a3781',

        }
            ];

        try {
            await storage.setMapAsync(walletName, nodeDetailsObject);
            navigation.replace('WalletOverview');
        }
        catch (err: any) {
            console.log(err.message);
        }
    };

    let navigationParams: any = ['pop', 'WalletOverview', 'md-chevron-up'];

    return (
        <View style={tw`flex-1 bg-white`}>

            <NavigationContext.Provider value={navigationParams}>
                <NavigationIconComponent />
            </NavigationContext.Provider>

            <View style={tw`p-5 mt--5`}>
                <Text style={tw`ml-2 pt-15 text-xl font-black mb-5`}>New Wallet</Text>

                <Form buttonStyle={tw`bg-black m-2 mt--3`} buttonText="Save" onButtonPress={() => onSubmit()}>
                    <Picker
                        items={[
                            { label: 'Lnd', value: 'Lnd' },
                            { label: 'LndHub', value: 'LndHub' },
                            { label: 'Eclair', value: 'Eclair' },
                        ]}
                        buttonStyle={tw`border-2 m-2 pl-3 rounded-md`}
                        iconWrapperStyle={tw`bg-white`}
                        placeholder="Interface"
                        selectedValue={interfaceName}
                        onSelection={(item: any) => setInterfaceName(item.value)}
                    />
                    <FormItem
                        isRequired
                        value={walletName}
                        textInputStyle={tw`border-2 pl-3 mt-5 rounded-md`}
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
                        textInputStyle={tw`border-2 pl-3 rounded-md`}
                        showErrorIcon={false}
                        placeholder="Url"
                        onChangeText={(url) => setUrl(url)}
                        asterik
                        ref={urlInput}
                    />
                    <FormItem
                        isRequired
                        value={macaroon}
                        textInputStyle={tw`border-2 pl-3 pt-3 mt--5 rounded-md`}
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

export default NewWalletFormComponent;