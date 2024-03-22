import React from 'react'
import MainSearch from '../MainSearch'


function Hero({fetchJobs, searchParams, setSearchParams}) {
  return (

    <div className="Hero" >

      <div className='searchbar'>
        
        <MainSearch fetchJobs={fetchJobs} searchParams={searchParams} setSearchParams={setSearchParams} />

      </div>
    </div>
  );
}

export default Hero
