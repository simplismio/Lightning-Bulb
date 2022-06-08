import { useState, useEffect } from 'react';
import Tor from "react-native-tor";


const useLndTransactionsHook = (key: string, api: string) => {

    let [lightningTransactions, setlightningTransactions] = useState(null);
    let [pending, setPending] = useState(false);
    let [error, setError] = useState(null);

    useEffect(() => {
        const loadNodeConnectionDetails = async (key: string, api: string) => {
            setPending(true);
            const value: any = '' //TODO HERE MMKV LOAD OF KEY
            if (value !== null) {
                const connectionDetails = JSON.parse(value);
                const tor = Tor({
                    stopDaemonOnBackground: true, // Auto shut down daemon when app in background
                });
                tor.stopIfRunning();
                console.log('Starting Tor connection');

                const socksProxy = await tor.startIfNotStarted();
                console.log('Tor proxy ' + socksProxy + ' started');

                try {
                    const rawResponse = await tor.get(connectionDetails['url']+api, { 'Grpc-Metadata-macaroon': connectionDetails['macaroon'], 'Content-Type': 'application/json' });

                    const response: any = rawResponse;
                    setlightningTransactions(response['json']['transactions']);
                    setPending(false);
                    tor.stopIfRunning();

                } catch (error) {
                    console.log(error);
                    const errorMessage: any = error;

                    setError(errorMessage);
                }
            }

        }

        loadNodeConnectionDetails(key, api)
            .catch(console.error);
    }, [key]);

    return { lightningTransactions, pending, error };

}

export default useLndTransactionsHook;