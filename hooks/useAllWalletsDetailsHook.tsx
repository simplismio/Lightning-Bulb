import { useState, useEffect } from 'react';
import { MMKVLoader } from 'react-native-mmkv-storage';

let storage = new MMKVLoader().withEncryption().initialize();

const useLoadAllWalletsDetailsHook = () => {
    let [allNodes, setAllNodes] = useState([]);

    useEffect(() => {
        const loadAllNodeDetails = () => {

            // storage.clearStore();
            // storage.clearMemoryCache();

            let allNodesRaw: any = storage.indexer.maps.getAll();
            if (allNodesRaw["_j"]["_j"] != undefined) {
                setAllNodes(allNodesRaw["_j"]["_j"]);
            }
            else {
                setAllNodes([]);
            }
        }
        loadAllNodeDetails()
    }, []);
    return { allNodes };

}

export default useLoadAllWalletsDetailsHook;