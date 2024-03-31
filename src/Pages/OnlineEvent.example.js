import {
  useIsOnlineWithSyncExternalStore,
  useIsOnlineWithUseEffect,
} from "../store/browser-events-example";

const OnlineEventExample = () => {
  const isOnline = useIsOnlineWithSyncExternalStore();
  const isOnlineWithUseState = useIsOnlineWithUseEffect();
  return (
    <>
      <p>with useSyncExternalStore</p>

      {isOnline ? "Yes you are online" : "No you are offline"}
      <hr />
      <p>with useState and useEffect</p>
      {isOnlineWithUseState ? "Yes you are online" : "No you are offline"}
    </>
  );
};
export default OnlineEventExample;
