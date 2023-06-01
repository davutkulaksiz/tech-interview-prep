// optimize the computation cost to improve performance

const App = () => {
  const [count, setCount] = useState(69);

  // MEMOIZATION
  // cache result of function call
  // instead of computing each time
  // we memoize it
  // it only recomputes when count changes
  const expensiveCount = useMemo(() => {
    return count ** 2;
  }, [count]);
  return <></>;
};

export default App;

// YOU DON'T WANT TO PREMATURELY OPTIMIZE PERFORMANCE
// USE ONLY AS NEEDED FOR EXPENSIVE CALCULATIONS

// memoizes return values but in other cases memoizing entire function is needed
// useCallback
