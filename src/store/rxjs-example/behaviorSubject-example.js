import { useSyncExternalStore } from "react";
import { BehaviorSubject } from "rxjs";

export const store = new BehaviorSubject(0);
//store.subscribe((value) => console.log(value));

export function useStore() {
    const value = useSyncExternalStore(subscribe, getSnapshot);
    return value;
}

function getSnapshot() {
    return store.getValue();
}

function subscribe(callback) {
    const subscription = store.subscribe(callback); // Store the subscription

    return () => subscription.unsubscribe(); // Unsubscribe in cleanup
}
