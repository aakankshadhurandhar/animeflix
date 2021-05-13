import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import { GlobalContext } from "../Context/Globalcontext";

function Favouritecard({ anime }) {
  const { removefromwatchlist }=useContext(GlobalContext)
  // eslint-disable-next-line
  const removehandler=(id)=>{
    removefromwatchlist(id)
  }
  return (
    <div className="anime" key={anime.id} style={{color:"white"}}>
      <button onClick={()=>removefromwatchlist(anime.id)}>
        <DeleteIcon style={{color:"white"}} />
      </button>
        <Link to={`/anime/${anime.id}`}>
      <img src={anime.poster} alt="animeimage" />
      </Link>
      <div className="anime-info">{anime.title}</div>
    </div>
  );
}

export default Favouritecard;

