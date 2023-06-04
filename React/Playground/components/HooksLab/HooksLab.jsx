import { useState, useRef, useEffect, createContext, useReducer } from "react";
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

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
};

export const HookReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ marginTop: "0.5rem" }}>
      Count: {state}
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </div>
  );
};
