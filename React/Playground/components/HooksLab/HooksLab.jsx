import { useState, useRef, useEffect } from "react";

const HooksLab = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    console.log((ref.current.innerText = "Increment the Counter (Changed by useRef)"));
  }, []);

  return (
    <>
      <h2>Welcome to HooksLab</h2>
      <h3>Count: {count}</h3>
      <button ref={ref} onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
    </>
  );
};

export default HooksLab;
