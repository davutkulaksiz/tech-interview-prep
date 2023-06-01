import React, { useEffect } from "react";

const hookUseEffect = () => {
  const [count, setCount] = useState(0);

  // RUN
  // when mounted
  // when state changes
  useEffect(() => {
    console.log("buongiorno side effect!");
  });

  // RUN
  // only once when mounted
  useEffect(() => {
    console.log("buongiorno side effect!");
  }, []);

  // RUN
  // when mounted
  // anytime stateful data changes in this case it is count
  useEffect(() => {
    console.log("buongiorno side effect!");
  }, [count]);

  useEffect(() => {
    // RUN
    // before component is removed from UI
    return () => console.log("addio side effect!");
  });

  return <button>{count}</button>;
};

export default hookUseEffect;

// COMPONENT LIFE CYCLE WITH CLASS COMPONENTS
class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // initialized (happens once)
    document.title = `Button not clicked yet!`;
  }
  componentDidUpdate() {
    // state updated (possibly multiple times)
    document.title = `Clicked ${this.state.count} times!`;
  }
  componentWillUnmount() {
    // destroyed (happens once)
    document.title = `Button destroyed!`;
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}
