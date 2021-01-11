import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";

import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState();

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people")
      .then((response) => setCharacters(response.data.results))
      .catch((err) => setError(err.response.message));
  }, []);

  useEffect(() => {
    console.log("my characters data", characters);
  }, [characters]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((character) => (
        <Character character={character} />
      ))}
    </div>
  );
};

export default App;
