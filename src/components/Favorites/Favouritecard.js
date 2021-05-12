import React from "react";
import { Link } from "react-router-dom";

function Favouritecard({ anime }) {
  return (
    <div className="anime" key={anime.id} style={{color:"white"}}>
        <Link to={`/anime/${anime.id}`}>
      <img src={anime.poster} alt="animeimage" />
      </Link>
      <div className="anime-info">{anime.title}</div>
    </div>
  );
}

export default Favouritecard;

