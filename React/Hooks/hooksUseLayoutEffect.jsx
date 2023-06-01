import { useLayoutEffect } from "react";

const App = () => {
  const coolButton = useRef(null);

  // after render but before painting to screen
  useLayoutEffect(() => {
    const rect = coolButton.current.getBoundingClientRect();

    console.log(box.height);
  });
  // blocks visual updates until your callback is finished
  return (
    <>
      <button ref={ref}></button>
    </>
  );
};

export default App;
