import "../App.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setSearch, items }) => {
  const location = useLocation(); // Get the current location object
  const [routePath, setRoutePath] = useState("");

  useEffect(() => {
    setText("");
    setSuggested([]);
    // Update the route path whenever the location changes
    setRoutePath(location.pathname);
  }, [location.pathname]);
  const [suggested, setSuggested] = useState([]);
  const [text, setText] = useState("");
  const onTextChange = (value) => {
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      suggestions = items.sort().filter((v) => regex.test(v));
    }

    setText(value);
    setSuggested(suggestions);
  };

  const suggestionSelected = (value) => {
    setText(value);
    setSuggested([]);
  };

  const renderSuggestions = () => {
    console.log("suggestions :", suggested);
    if (suggested.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggested.map((anime) => (
          <li
            key={anime}
            onClick={(e) => {
              suggestionSelected(anime);
              setSearch(anime);
            }}
          >
            {anime}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="header">
      <div>
        <Link className="link" to={"/"}>
          AnimeVault
        </Link>
      </div>
      {routePath === "/" && (
        <div className="search">
          <div className="TypeAheadDropDown">
            <label htmlFor="search">Search</label>
            <input
              placeholder="Enter Anime Name"
              type="search"
              value={text}
              onChange={(e) => {
                setSearch(e.target.value);
                onTextChange(e.target.value);
              }}
            />
            {renderSuggestions()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
