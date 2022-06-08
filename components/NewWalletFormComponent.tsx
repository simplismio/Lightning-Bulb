import { View, Text, StyleSheet} from "react-native";
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { MMKVLoader } from 'react-native-mmkv-storage';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import { Input, Icon } from '@rneui/themed';
import { Button } from '@rneui/base';
import { Dropdown } from 'react-native-element-dropdown';

const NewWalletFormComponent = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    let storage = new MMKVLoader().withEncryption().initialize();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            interface: '',
            name: '',
            url: '',
            macaroon: ''
        }
    });

    const data = [
        { label: 'LND', value: 'lnd' },
        { label: 'LightningHub', value: 'lightninghub' },
        { label: 'Eclair', value: 'eclair' },
        { label: 'Lightning Core', value: 'lightningcore' },
        { label: 'C-Lightning REST', value: 'clightningrest' },
        { label: 'Spark', value: 'spark' },

    ];

    const onSubmit = async (data: any) => {

        var nodeDetails = [
            data['interface'],
            data['name'],
            data['url'],
            data['macaroon'],
        ];
        try {
            await storage.setArrayAsync(data['name'], nodeDetails);
            navigation.navigate('WalletOverview')
        }
        catch (err: any) {
            console.log(err.message);
        }
    };


    const [value, setValue] = useState(null);


    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Interface"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                renderLeftIcon={() => (
                    <Icon
                        style={styles.iconStyle}
                        name='md-flower'
                        type='ionicon'
                        size={21}
                        color='black'
                    />
                )}
            />
            

                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Wallet name"
                                        leftIcon={
                                            <Icon
                                                name='md-flash'
                                                type='ionicon'
                                                size={24}
                                                color='black'
                                            />
                                        }
                                    />
                                )}
                                name="name"
            />
            {errors.name && <Text>This is required.</Text>}

                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Url"
                                        defaultValue="https://namdj63hutqhnx2nf3tu44tbq6bw64q7zbma5dq6vae66toprakyzqqd.onion:8080'"
                                        leftIcon={
                                            <Icon
                                                name='md-globe'
                                                type='ionicon'
                                                size={24}
                                                color='black'
                                            />
                                        }
                                    />
                                )}
                                name="url"
                            />
                            {errors.url && <Text>This is required.</Text>}

                            <Controller
                                control={control}
                                rules={{
                                    maxLength: 200,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        style={styles.input}
                                        onBlur={onBlur}
                                        value={value}
                                        multiline={true}
                                        placeholder="Macaroon Hex"
                                        defaultValue="0201036c6e6402f801030a108d2a861dd90e17121432311dc248787d1201301a160a0761646472657373120472656164120577726974651a130a04696e666f120472656164120577726974651a170a08696e766f69636573120472656164120577726974651a210a086d616361726f6f6e120867656e6572617465120472656164120577726974651a160a076d657373616765120472656164120577726974651a170a086f6666636861696e120472656164120577726974651a160a076f6e636861696e120472656164120577726974651a140a057065657273120472656164120577726974651a180a067369676e6572120867656e657261746512047265616400000620c827db1e3a48ecb803b3a9837e5fc7da9781805a3506681f3b766e382a1a3781"
                                        leftIcon={
                                            <Icon
                                                name='md-finger-print'
                                                type='ionicon'
                                                size={24}
                                                color='black'
                                            />
                                        }
                                    />
                                )}
                                name="macaroon"
            />
            {errors.name && <Text>This is required.</Text>}

            <Button
                title="Save Wallet"
                style={styles.button}
                buttonStyle={{ backgroundColor: 'black' }}
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: 'white',
    },
    input: {
        padding: 10,
        margin: 10,
        width: '100%',
        borderColor: 'red'
    },
    button: {
        backgroundColor: 'black',
        color: 'black',
        padding: 10,
    },

    dropdown: {
        height: 70,
        paddingHorizontal: 8,
        marginBottom: 25,
        paddingLeft: 10,
        borderColor: 'gray',
        borderBottomWidth: 0.5,
        borderRadius: 8,
    },
    placeholderStyle: {
        fontSize: 18,
        color: 'grey'
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight: 28,

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 18,
    },

});

export default NewWalletFormComponent;