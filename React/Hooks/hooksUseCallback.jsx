// memoizing entire function
// when you define a function in a component
// a new function object is created each time the component is re-rendered
// usually this is not a big deal for performance
// but in some cases, you may want to memoize the function
const App = () => {
  const [count, setCount] = useState(60);

  const showCount = useCallback(() => {
    alert(`Count ${count}`);
  }, [count]);

  return (
    <>
      <SomeChild handler={showCount} />
    </>
  );
};

export default App;
