import HooksLab, { HookRef, HookContext } from "../components/HooksLab/HooksLab";
import { useState } from "react";

const Playground = () => {
  const [isUseRefActive, setIsUseRefActive] = useState(false);
  const [isUseContextActive, setIsUseContextActive] = useState(false);

  return (
    <>
      <HooksLab />
      <div>
        <button
          onClick={() => setIsUseRefActive((isUseRefActive) => !isUseRefActive)}
        >
          useRef
        </button>
        {isUseRefActive ? <HookRef /> : null}
      </div>
      <div>
        <button
          onClick={() =>
            setIsUseContextActive((isUseContextActive) => !isUseContextActive)
          }
        >
          useContext
        </button>
        {isUseContextActive ? <HookContext /> : null}
      </div>
    </>
  );
};

export default Playground;
