import { useRef } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RenderPage from "./components/RenderPage";

function App() {
  const loadingBarRef = useRef(null);
  const parent =
    window.location.hostname === "theprojectsx.github.io"
      ? "/ProjectHelper"
      : "";
  if (parent !== "" && !window.location.pathname.includes(parent))
    window.location = "./" + parent;

  return (
    <div className="App">
      <LoadingBar color="white" ref={loadingBarRef} transitionTime={80} />
      <Router>
        <Navbar parent={parent} />
        <Sidebar parent={parent} />
        <Routes>
          <Route
            path={`${parent === "" ? "/" : parent}`}
            element={<Home parent={parent} />}
          />
          <Route
            path={`${parent}/:parentSet/:tech?/:subSet?`}
            element={
              <RenderPage parent={parent} loadingBarRef={loadingBarRef} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
