
import React,{useState,useEffect} from 'react'
import AnimeCard from '../AnimeCard/AnimeCard'
import './topanime.css'

function TopAiringanime() {
    const[topanime,settopanime]=useState([])
    const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/airing`)
			.then(res => res.json());

		settopanime(temp.top.slice(0, 20));
	}
    useEffect(() => {
		GetTopAnime();
	}, []);
    return (
        <div>
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

export default TopAiringanime
