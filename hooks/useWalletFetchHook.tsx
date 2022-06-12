import { useState, useEffect } from 'react';
import Tor from "react-native-tor";
import { MMKVLoader } from 'react-native-mmkv-storage';

let storage = new MMKVLoader().withEncryption().initialize();

const useWalletFetchHook = (_name: any, _api: any) => {

    let [data, setData] = useState('');
    let [pending, setPending] = useState(false);
    let [status, setStatus] = useState('');
    let [error, setError] = useState(false);

    let name = _name;
    let api = _api;

    useEffect(() => {

        let torRequest = async (walletDetailsObject: any) => {

            let localResponse: any;

            let tor = Tor({
                stopDaemonOnBackground: true, // Auto shut down daemon when app in background
            });
            const socksProxy = await tor.startIfNotStarted();
            console.log('Tor proxy ' + socksProxy + ' started');

            try {
                localResponse = await tor.get(walletDetailsObject[0]['url'] + api, { 'Grpc-Metadata-macaroon': walletDetailsObject[0]['macaroon'], 'Content-Type': 'application/json' });
            } catch (error) {
                console.log(error)
            }
            tor.stopIfRunning();
            tor.delete;
            
            return localResponse;
        }

        let fetch= async () => {    
      
            let walletDetailsObject: any = await storage.getMapAsync(name);

                setPending(true);
                setStatus('Busy')

                try {
                    let localResponse = await torRequest(walletDetailsObject);
                    
                    let response: any = localResponse;

                    setData(response);
                    setError(false);
                    setPending(false);

                } catch (error) {
                    console.log(error);

                    setData('Zero');
                    setError(true);
                    setPending(false);
                }
        }
        fetch().catch(console.error)

    }, []);

    return { data, pending, status, error };

}

export default useWalletFetchHook;