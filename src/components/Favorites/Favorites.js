import React, { useContext } from "react";
import { GlobalContext } from "../Context/Globalcontext";
import FavouriteCard from "./Favouritecard";

function Favorites() {
  const { favourites } = useContext(GlobalContext);

  return (
      <>
   <h1 style={{fontSize:"3rem",color:"white",textAlign:"center"}}>Favourite List</h1>
    <div className="anime-list">
      {favourites &&
        favourites.map((anime) => (
          <FavouriteCard key={anime.mal_id} anime={anime} />
        ))}
    </div>
    </>
  );
}

export default Favorites;
