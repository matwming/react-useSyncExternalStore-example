import { store, useStore } from "../store/rxjs-example";

const BehaviorSubjectExample = () => {
  const storeValue = useStore();
  return (
    <>
      <h3>BehaviorSubject example:</h3>
      <p>current value is:{storeValue}</p>
      <button onClick={() => store.next(storeValue + 1)}>+</button>
      <button onClick={() => store.next(storeValue - 1)}>-</button>
    </>
  );
};

export default BehaviorSubjectExample;
