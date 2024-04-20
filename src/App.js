import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Anime from "./components/Anime";
import { animes } from "./utils/anime";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const setSearch = (keword) => {
    console.log("keword: ", keword);
    setSearchKeyword(keword);
  };
  return (
    <>
      <div className="App">
        <Router>
          <Navbar setSearch={setSearch} items={animes} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home searchKeyword={searchKeyword} setSearch={setSearch} />
              }
            />
            <Route exact path="/anime/:animeId" element={<Anime />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
