import HooksLab, { HookRef } from "../components/HooksLab/HooksLab";
import { useState } from "react";

const Playground = () => {
  const [isUseRefActive, setIsUseRefActive] = useState(false);

  return (
    <>
      <HooksLab />
      <button
        onClick={() => setIsUseRefActive((isUseRefActive) => !isUseRefActive)}
      >
        useRef
      </button>
      {isUseRefActive ? <HookRef /> : null}
    </>
  );
};

export default Playground;
