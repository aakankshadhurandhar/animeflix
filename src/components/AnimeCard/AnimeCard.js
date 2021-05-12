import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Animecard.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { GlobalContext } from '../Context/Globalcontext';
function AnimeCard({anime}) {
	const { addAnimeToWatchlist,
	         favourites }=useContext(GlobalContext)
			 
			 const[favourite,setfavourite]=useState({id:anime.mal_id,title:anime.title,poster:anime.image_url})
			 
			 let alreadyfavouritemovie=favourites.find(obj=>obj.mal_id===anime.mal_id)
			 const favouritesdisable=alreadyfavouritemovie? true:false;
			const handlefavanime=()=>{
				setfavourite(favourite)
				addAnimeToWatchlist(favourite)
			}
	return (
		<div className="anime">
			<Link to={`/anime/${anime.mal_id}`}>
			<img src={anime.image_url} alt="anime-img"/>
			</Link>
			<div className="anime-info">
				<button onClick={handlefavanime}
				disabled={favouritesdisable}><FavoriteIcon style={{fontSize:"2rem",color:favouritesdisable?"red":"white"}}
				
			
				/></button>
			
				<h3>{anime.title}</h3>
				<span className="tag">{anime.score}</span>


			</div>

		</div>
	)
}

export default AnimeCard