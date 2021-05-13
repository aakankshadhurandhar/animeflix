import React,{useState,useEffect} from 'react'
import AnimeCard from '../AnimeCard/AnimeCard'
import './topmanga.css'

function Topmanga() {
    const[topanime,settopanime]=useState([])
    const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		settopanime(temp.top.slice(0, 40));
	}
    useEffect(() => {
		GetTopAnime();
	}, []);
    return (
        <div>
            <h1 style={{color:"white",fontSize:"3rem",margin:"2rem"}}>Popular Anime</h1>
            <div className="anime-list">
                
				{topanime.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))}
			</div>
        </div>
    )
}

export default Topmanga
