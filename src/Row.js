import React, { useState, useEffect } from "react";
import axios from "./axios";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div>
      <h2>{title}</h2>
      {/* container -> posters */}
    </div>
  );
};

export default Row;
