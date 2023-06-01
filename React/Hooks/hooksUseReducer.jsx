// setState but uses Redux pattern
/**
 * ACTION -> REDUCER -> STORE
 * ^                     |
 * |                     |
 * -------- UI <----------
 */
// Instead of updating state directly
// you dispatch actions that go to a reducer function

import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0); // reducer function, initial state

  return (
    <>
      Count: {state}
      {/**
       * ACTION
       * type: string
       * payload: any
       */}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default App;
