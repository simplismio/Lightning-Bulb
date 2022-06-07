import { useState, useEffect } from 'react';
import Tor from "react-native-tor";


const useLndBalance = (url: string, macaroon: string, api: string) => {

    let [lightningBalance, setlightningBalance] = useState(null);
    let [pending, setPending] = useState(false);
    let [error, setError] = useState(null);

    useEffect(() => {
        const loadNodeConnectionDetails = async (url: string, macaroon: string, api: string) => {
            setPending(true);

            console.log(url);
            console.log(macaroon);

            const tor = Tor({
                stopDaemonOnBackground: true, // Auto shut down daemon when app in background
            });
            tor.stopIfRunning();
            console.log('Starting Tor connection');

            const socksProxy = await tor.startIfNotStarted();
            console.log('Tor proxy ' + socksProxy + ' started');

            try {
                const rawResponse = await tor.get(url + api, { 'Grpc-Metadata-macaroon': macaroon, 'Content-Type': 'application/json' });

                const response: any = rawResponse;
                setlightningBalance(response['json']['balance']);
                setPending(false);
                tor.stopIfRunning();

            } catch (error) {
                console.log(error);
                const errorMessage: any = error;

                setError(errorMessage);
            }
        }
        loadNodeConnectionDetails(url, macaroon, api)
            .catch(console.error)
    }, []);

    return { lightningBalance, pending, error };

}

export default useLndBalance;