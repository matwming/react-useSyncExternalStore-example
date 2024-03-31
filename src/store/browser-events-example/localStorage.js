import { useSyncExternalStore } from "react";

export const useInput = () => {
    const input = useSyncExternalStore(subscribe, getSnapshot);
    return input;
};

const getSnapshot = () => {
    return localStorage.getItem("input");
};

const subscribe = (callback) => {
    // Add event listener for storage changes
    window.addEventListener("storage", callback);
    // Cleanup function to remove the listener
    return () => window.removeEventListener("storage", callback);
};
