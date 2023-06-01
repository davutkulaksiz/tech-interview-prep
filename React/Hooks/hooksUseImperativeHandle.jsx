// if you build a reusable component library in React
// you may need to access underlying DOM element then
// forward it so it can be accessed by consumers of the component library

import { forwardRef, useImperativeHandle } from "react";

function App() {
  const ref = useRef(null);

  return <CoolButton ref={ref}></CoolButton>;
}

const CoolButton = () => {
  const chillButton = useRef(null);

  // useImperativeHandle comes in if you want to change behaviour of the exposed ref
  useImperativeHandle(ref, () => ({
    click: () => {
      console.log("clicking button");
      chillButton.current.click();
    },
  }));

  return <button ref={chillButton}></button>;
};

CoolButton = forwardRef(CoolButton);
