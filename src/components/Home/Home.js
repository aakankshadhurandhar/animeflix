import React, { useEffect, useState } from 'react'

import TopAiringanime from '../Topanime/TopAiringanime'

function Home() {
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
           
            <TopAiringanime topanime={topanime}/>
        </div>
    )
}

export default Home
