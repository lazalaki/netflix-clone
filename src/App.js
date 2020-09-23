import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTrending} />
      <Row title="Trending now" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
