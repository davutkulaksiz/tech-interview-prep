import React, { useState } from "react";

// the most important and the most used hook
// purpose of this hook is to handle reactive data
// any data that changes in application is called state
// and when state changes, we want React to update the UI
// changes should be reflected to the end user

const hookUseState = () => {
  // [reactive value (reactive data or state), setter]
  const [count, setCount] = useState(0); // initial state is 0

  return (
    <button onClick={() => setCount((count) => count + 1)}>{count}</button>
  );
};

export default hookUseState;

// class versioın
class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}
