import { useState, useRef, useEffect, createContext } from "react";
import Cats from "../Cats/Cats";

const HooksLab = () => {
  return (
    <>
      <h2>Welcome to HooksLab</h2>
    </>
  );
};

export default HooksLab;

export const HookRef = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    console.log(
      (ref.current.innerText = "Increment the Counter (Changed by useRef)")
    );
  }, []);

  return (
    <>
      <h3>Count: {count}</h3>
      <button ref={ref} onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
    </>
  );
};

export const CatContext = createContext();

export const HookContext = () => {
  const strays = {
    tekir: "dombili",
    sarman: "turunç",
  };

  return (
    <CatContext.Provider value={strays}>
      <Cats />
    </CatContext.Provider>
  );
};
