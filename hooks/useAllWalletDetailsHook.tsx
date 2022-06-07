import { useState, useEffect } from 'react';
import { MMKVLoader } from 'react-native-mmkv-storage';

let storage = new MMKVLoader().withEncryption().initialize();

const useLoadAllLoadNodeDetails = () => {
    let [allNodes, setAllNodes] = useState([]);

    useEffect(() => {
        const loadAllNodeDetails = () => {

            // storage.clearStore();
            // storage.clearMemoryCache();

            let allNodesRaw: any = storage.indexer.arrays.getAll();
            setAllNodes(allNodesRaw['_W']['_W']);
        }
        loadAllNodeDetails()
    }, []);
    return { allNodes };

}

export default useLoadAllLoadNodeDetails;