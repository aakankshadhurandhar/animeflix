import React from 'react'
import { Link } from 'react-router-dom'
import './Animecard.css'
function AnimeCard({anime}) {
	return (
		<div className="anime">
			<Link to={`/anime/${anime.mal_id}`}>
			<img src={anime.image_url} alt="anime-img"/>
			</Link>
			<div className="anime-info">
				<h3>{anime.title}</h3>
				<span className="tag">{anime.score}</span>


			</div>

		</div>
	)
}

export default AnimeCard