import React from "react";

function Favouritecard({ anime }) {
  return (
    <div className="anime">
      <img src={anime.poster} alt="animeimage" />
      <div className="anime-info">{anime.title}</div>
    </div>
  );
}

export default Favouritecard;

