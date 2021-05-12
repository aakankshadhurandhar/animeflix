import React from 'react'


import { Link } from 'react-router-dom'
import './Corosal.css'
function Corosal() {
    return (
        <>
         <Link to={`/anime/40028/`}>
        <div className="hero-section mb-8 relative">
      <div className="title md:w-9/12 p-3 md:ml-8 top-2/4 absolute z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Shingeki no Kyojin: The Final Season
        </h2>
        <p className="text-lg">
          With Eren and company now at the shoreline and the threat of Marley
          looming, what’s next for the Scouts and their quest to unravel the
          mysteries of the Titans, humanity, and more?
        </p>
      </div>
    </div>
    </Link>

        </>
            
    )
}

export default Corosal
