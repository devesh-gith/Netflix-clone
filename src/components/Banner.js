import axios from "../axios";
import React, { useEffect, useState } from "react";
import "../style/banner.css";
import requests from "../Requests";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center ",
      }}
    >
      <div className="banner__content">
        <div className="banner__title">
          {movie.name || movie.title || movie.original__name}
        </div>
        <div className="banner__option">
          <button>Play</button>
          <button>My List</button>
        </div>
        <div className="banner__descr">
          {truncate(` ${movie?.overview} `, 150)}
        </div>
      </div>
      <div className="banner__gradient" />
    </header>
  );
}

export default Banner;
