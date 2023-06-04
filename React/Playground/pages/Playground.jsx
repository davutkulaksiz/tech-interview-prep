import HooksLab, {
  HookContext,
  HookReducer,
  HookRef,
} from "../components/HooksLab/HooksLab";
import { useState } from "react";

const Playground = () => {
  const [isUseRefActive, setIsUseRefActive] = useState(false);
  const [isUseContextActive, setIsUseContextActive] = useState(false);
  const [isUseReducerActive, setIsUseReducerActive] = useState(false);

  return (
    <>
      <HooksLab />
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => setIsUseRefActive((isUseRefActive) => !isUseRefActive)}
        >
          useRef
        </button>
        {isUseRefActive ? <HookRef /> : null}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() =>
            setIsUseContextActive((isUseContextActive) => !isUseContextActive)
          }
        >
          useContext
        </button>
        {isUseContextActive ? <HookContext /> : null}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() =>
            setIsUseReducerActive((isUseReducerActive) => !isUseReducerActive)
          }
        >
          useReducer
        </button>
        {isUseReducerActive ? <HookReducer /> : null}
      </div>
    </>
  );
};

export default Playground;
