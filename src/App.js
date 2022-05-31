import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        <a href="https://github.com/jjepyeon/weather-react">Open-source code</a>{" "}
        by Jane Pyeon
      </p>
    </div>
  );
}
