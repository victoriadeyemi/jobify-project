import React from 'react'
import MainSearch from '../MainSearch'

function Hero() {
  return (

    <div className="Hero w-screen h-full " >
      <img src="src\components\MainHero\Images\hero.jpg" className="w-screen h-full"></img>

      <div className='searchbar'>
        
        <MainSearch />

      </div>
    </div>
  );
}

export default Hero
