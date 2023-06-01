// create a mutable object that'll keep same reference between renders

const hooksUseRef = () => {
  // mutable value
  // does NOT re-redner UI
  const count = useRef(0);

  return <button onClick={() => count.current++}>{count.current}</button>;
};

export default hooksUseRef;

// MORE COMMON USE CASE
// When you need to grab an element from DOM
// use useRef
const App = () => {
  // grab native HTML elements from JSX (DOM)
  const buttonRef = useRef();

  const clickOnButton = () => buttonRef.current.click();

  return <button ref={buttonRef}></button>;
};
