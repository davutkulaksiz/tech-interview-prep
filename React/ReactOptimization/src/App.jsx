import { lazy, Suspense } from "react";
import "./App.css";

const delay = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};


// Code Splitting with Lazy
const Home = lazy(() => delay(import("../pages/Home")));
const About = lazy(() => delay(import("../pages/About")));
const Gallery = lazy(() => delay(import("../pages/Gallery")));

// By doing this, when you build your React app, it'll have more than one .js chunks ready
// to be loaded when demanded

function App() {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Home />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <Gallery />
      </Suspense>
    </>
  );
}

export default App;
