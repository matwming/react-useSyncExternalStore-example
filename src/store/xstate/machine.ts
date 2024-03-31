import { assign, createActor, setup } from "xstate";
import { useSyncExternalStore } from "react";

const store = setup({
  types: {
    events: {} as { type: "change"; value: number },
    context: {} as { count: number },
  },
}).createMachine({
  context: {
    count: 0,
  },
  on: {
    change: {
      actions: assign({
        count: ({ context, event }) => context.count + event.value,
      }),
    },
  },
});

export const actor = createActor(store);
actor.start();

const getSnapShot = () => {
  return actor.getSnapshot().context.count;
};
const subscribe = (callback: any) => {
  const subs = actor.subscribe(callback);
  return () => subs.unsubscribe();
};
export const useXstateStore = () => {
  const value = useSyncExternalStore(subscribe, getSnapShot);
  return value;
};
