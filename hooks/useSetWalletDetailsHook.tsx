import { useState, useEffect } from 'react';
import { MMKVLoader } from 'react-native-mmkv-storage';

let storage = new MMKVLoader().withEncryption().initialize();

const setNodeDetailsHook = (name: string, url: string, macaroon: string) => {

    let [done, setDone] = useState(false);

    useEffect(() => {
        const setNodeDetails = async (name: string, url: string, macaroon: string) => {
            
            storage.clearStore();
            storage.clearMemoryCache();

            var nodeDetails = [{
                name: name,
                url: url,
                macaroon: macaroon,
            }];
            
            await storage.setMapAsync(name, nodeDetails);
            setDone(true);
        }
        setNodeDetails(name, url, macaroon)
            .catch(console.error), [];
    });
    return { done };

}

export default setNodeDetailsHook;