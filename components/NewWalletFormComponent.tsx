import { View, Text, StyleSheet, TextInput, Button} from "react-native";
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import useSetWalletDetails from "../hooks/useSetWalletDetailsHook";
import { MMKVLoader } from 'react-native-mmkv-storage';

const NewWalletFormComponent = () => {

    let storage = new MMKVLoader().withEncryption().initialize();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            url: '',
            macaroon: ''
        }
    });

    const onSubmit = async (data: any) => {
        console.log(data);

        //const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
        const lndUrl = 'https://namdj63hutqhnx2nf3tu44tbq6bw64q7zbma5dq6vae66toprakyzqqd.onion:8080';
        const lndMacaroon = '0201036c6e6402f801030a108d2a861dd90e17121432311dc248787d1201301a160a0761646472657373120472656164120577726974651a130a04696e666f120472656164120577726974651a170a08696e766f69636573120472656164120577726974651a210a086d616361726f6f6e120867656e6572617465120472656164120577726974651a160a076d657373616765120472656164120577726974651a170a086f6666636861696e120472656164120577726974651a160a076f6e636861696e120472656164120577726974651a140a057065657273120472656164120577726974651a180a067369676e6572120867656e657261746512047265616400000620c827db1e3a48ecb803b3a9837e5fc7da9781805a3506681f3b766e382a1a3781';

        //const setNodeDetails = useSetWalletDetails(data['name'], data['url'], data['macaroon']);

        var nodeDetails = [
            data['name'],
            lndUrl,
            lndMacaroon,
            //data['name'],
            //data['url'],
            //data['macaroon'],
        ];

        try {
            storage.setArray(data['name'], nodeDetails)
        }
        catch (err: any) {
            console.log(err.message);
        }

        storage.setMap(data['name'], nodeDetails)

    
        // await storage.setMapAsync(data['name'], nodeDetails);


    };

    return (

            <View style={{ flex: 1 }}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        // style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Wallet name"
                                    />
                                )}
                                name="name"
                            />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        // style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Url"
                                    />
                                )}
                                name="url"
                            />
                            {errors.url && <Text>This is required.</Text>}

                            <Controller
                                control={control}
                                rules={{
                                    maxLength: 100,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        // style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        multiline={true}
                                        numberOfLines={5}
                                        placeholder="Macaroon"
                                    />
                                )}
                                name="macaroon"
                            />
                            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default NewWalletFormComponent;