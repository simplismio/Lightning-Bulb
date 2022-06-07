import { useState, useEffect } from 'react';
import { MMKVLoader } from 'react-native-mmkv-storage';

let storage = new MMKVLoader().withEncryption().initialize();

const useLoadNodeDetails = (nameRaw: string) => {

    let [url, setUrl] = useState('');
    let [macaroon, setMacaroon] = useState('');
    let [name, setName] = useState('');

    useEffect(() => {
        const loadNodeDetails = async (nameRaw: string) => {
            let nodeDetailsArray: any = storage.getArray(nameRaw);
            setName(nodeDetailsArray[0]);
            setUrl(nodeDetailsArray[1]);
            setMacaroon(nodeDetailsArray[2]);
        }
        loadNodeDetails(nameRaw)
            .catch(console.error);
    }, []);

    return { name, url, macaroon};

}

export default useLoadNodeDetails;