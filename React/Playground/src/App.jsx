import reactLogo from "./assets/react.svg";
import "./App.css";
import Playground from "../pages/Playground";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Playground Project</h1>
      <Playground />
    </>
  );
}

export default App;
