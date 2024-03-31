import { store, useStore } from "../store/rxjs-example";
import { actor, useXstateStore } from "../store/xstate/machine";

const XstateExample = () => {
  const storeValue = useXstateStore();
  return (
    <>
      <h3>Xstate example</h3>
      <p>current value is:{storeValue}</p>
      <button onClick={() => actor.send({ type: "change", value: 1 })}>
        +
      </button>
      <button onClick={() => actor.send({ type: "change", value: -1 })}>
        -
      </button>
    </>
  );
};

export default XstateExample;
