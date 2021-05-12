import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Context/Globalcontext';

function Favouritecard({anime}) {
    const[favourite,setfavourite]=useState([]);
    const{addAnimeToWatchlist}=useContext(GlobalContext)
    const favcard=(id,title,poster)=>{
            setfavourite({id:id,title:title,poster:poster})
            addAnimeToWatchlist(favourite)
    }
    useEffect=()=>{
        setfavourite({id:anime.id,title:anime.title,poster:anime.poster})
    }
    return (
        <div className="anime">
            <img src={anime.poster} alt="animeimage"/>
            <div className="anime-info">
                {anime.title}
            </div>

            
        </div>
    )
}

export default Favouritecard
