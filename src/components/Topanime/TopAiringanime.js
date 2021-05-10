
import React from 'react'
import AnimeCard from '../AnimeCard/AnimeCard'
import './topanime.css'

function TopAiringanime({topanime}) {
    
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
