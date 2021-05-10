import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function AnimeDetails({ match }) {
    let params=match.params;
    const[detail,setdetail]=useState([])
    const getanimedetails=async(mal_id)=>{
        const temp=await fetch(`https://api.jikan.moe/v3/anime/${mal_id}`)
        .then(res=>res.json());
        setdetail(temp)
        console.log()

    }
    useEffect(() => {
        getanimedetails()
    }, [params.mal_id]);
    return (
        <div style={{color:"white"}}>
          {detail.title}
        </div>
    )
}

export default AnimeDetails
