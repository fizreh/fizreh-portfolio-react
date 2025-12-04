import React, { useState, useEffect } from "react";
import "./ProgrammingJoke.scss";

function ProgrammingJoke() {
  const [joke, setJoke] = useState("Loading joke...");

  const fetchJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((response) => response.json())
      .then((data) => setJoke(data.joke))
      .catch((err) => {
        console.error("Error fetching joke:", err);
        setJoke("Oops! Could not load a joke 😢");
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="programming-joke-card">
      <h3>💻 Programming Joke</h3>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke 🤣</button>
    </div>
  );
}

export default ProgrammingJoke;