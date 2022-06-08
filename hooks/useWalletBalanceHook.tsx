import { useState, useEffect } from 'react';
import Tor from "react-native-tor";
import { MMKVLoader } from 'react-native-mmkv-storage';

let storage = new MMKVLoader().withEncryption().initialize();

const useWalletBalanceHook = (_name: any, _api: any) => {

    let [balance, setBalance] = useState('');
    let [pending, setPending] = useState(false);
    let [errorDetails, setError] = useState('');

    const tor = Tor({
        stopDaemonOnBackground: true, // Auto shut down daemon when app in background
    });

    useEffect(() => {

        const loadNodeConnectionDetails = async (__name, __api: any) => {    
      
                let walletDetailsArray: any = await storage.getArrayAsync(__name);
                setPending(true);

                const socksProxy = await tor.startIfNotStarted();
                console.log('Tor proxy ' + socksProxy + ' started');

                try {
                    const rawResponse = await tor.get(walletDetailsArray[1] + __api, { 'Grpc-Metadata-macaroon': walletDetailsArray[2], 'Content-Type': 'application/json' });
                    const response: any = rawResponse;
                    setBalance(response['json']['balance']);
                    setPending(false);
                } catch (error) {
                    console.log(error);
                    const errorMessage: any = error;

                    setError(errorMessage);
                }
                tor.stopIfRunning(); 
        }
        loadNodeConnectionDetails(_name, _api).catch(console.error)

    }, []);

    return { balance, pending, errorDetails };

}

export default useWalletBalanceHook;