import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';

import Header from '../Header/Header';


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
        getanimedetails(params.mal_id)
       
    }, [params.mal_id]);
    
    return (
        <div style={{color:"white"}}>
          
                <Header />
            { detail.trailer_url &&
            <div className="mx-auto">
            <ReactPlayer url={detail.trailer_url} 
              width="100%" 
              height="35rem"
              />
            </div>

}

            
            <div className="md:flex md:text-left text-center">
                <img src={detail.image_url}
                alt="image_this"
                className="rounded shadow-lg details-poster   m-20"
                

                />
                <div className="details md:ml-6 md:mt-0 mt-5">
                <h2 className="text-2xl font-semibold mt-20">
                
                        <span className="text-white-500" > { detail.status } </span> <br></br>
                
            <span className="text-yellow-500" > ★ </span> { detail.score }
                </h2>
                <div className="head-title md:flex">
            <h1 className="text-3xl md:text-4xl font-semibold">{detail.title}</h1>
          </div>
          <p className="text-lg">
            <span className="font-medium">Release : </span>{detail.premiered}
          </p>
          <p className="text-lg">
            <span className="font-medium">Duration : </span>{detail.duration }
          </p>
                </div>


            </div>
            <div className="container mx-auto mt-16 px-5 md:px-10 mb-16 ml-16">
      <div className="synopsis">
        <h1 className="md:text-4xl text-3xl mb-4">Synopsis</h1>
        <p>{detail.synopsis }</p>
      </div>
            

        </div>
        
        


</div>

    )
}

export default AnimeDetails
