import { useInput } from "../store/browser-events-example";

const LocalStorageExample = () => {
  const input = useInput();
  return (
    <>
      <input
        onChange={(e) => {
          localStorage.setItem("input", e.target.value);
          window.dispatchEvent(new Event("storage"));
        }}
        placeholder={"try to type anything..."}
      />
      <p>your input is: {input}</p>
    </>
  );
};
export default LocalStorageExample;
