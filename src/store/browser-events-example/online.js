import {useEffect, useState, useSyncExternalStore} from "react";


// without useSyncExternalStore api, we have to manually manage the states
export const useIsOnlineWithUseEffect = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        window.addEventListener("online", (v) => {
            setIsOnline(true);
        });
        window.addEventListener("offline", (v) => {
            setIsOnline(false);
        });

        return () => {
            window.removeEventListener("online",()=>{});
            window.removeEventListener("offline",()=>{});
        };
    }, []);
    return isOnline;
};

// with useSyncExternalStore api
export function useIsOnlineWithSyncExternalStore() {
    const isOnline = useSyncExternalStore(subscribe, getSnapshot);
    return isOnline;
}

function getSnapshot() {
    return navigator.onLine;
}

function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}
