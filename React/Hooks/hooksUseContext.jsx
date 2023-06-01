// allows you to work with Context API
// which allows you to share data without passing props

const cats = {
  tekir: "dombili",
  british: "duman",
};

const CatContext = createContext(cats);

const App = () => {
  return (
    <CatContext.Provider value={cats.tekir}>
      <Gatto />
    </CatContext.Provider>
  );
};

export default App;

const Gatto = () => {
  // consume value from nearest parent provider
  const catName = useContext(CatContext);
  return <div>Gatto: {catName}</div>;
};
