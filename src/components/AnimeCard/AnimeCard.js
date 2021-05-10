import React from 'react'
import './Animecard.css'
function AnimeCard({anime}) {
	return (
		<div className="anime">
			<img src={anime.image_url} alt="anime-img"/>
			<div className="anime-info">
				<h3>{anime.title}</h3>
				<span className="tag">{anime.score}</span>


			</div>

		</div>
	)
}

export default AnimeCard