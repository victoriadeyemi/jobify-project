import React from 'react'
import MainSearch from '../MainSearch'


function Hero({searchParams, setSearchParams}) {
  return (

    <div className="Hero w-screen h-full " >
      <img src="src\components\MainHero\Images\hero.jpg" className="w-screen h-full"></img>

      <div className='searchbar'>
        
        <MainSearch searchParams={searchParams} setSearchParams={setSearchParams} />

      </div>
    </div>
  );
}

export default Hero
