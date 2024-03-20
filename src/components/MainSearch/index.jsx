import React from 'react';

function Search() {

    return (
        <div className="flex items-center bg-cover bg-bottom p-10 md:py-32 md:px-16">

            <form className="bg-cyan-600 bg-opacity-75 p-6 md:p-10 rounded-lg w-full shadow-lg">

                <h1 className="font-serif text-2xl md:text-3xl leading-tight text-center font-normal text-white mb-8">Find your dream Job Today!</h1>

                <div className="flex flex-wrap items-end -mx-3">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-sm font-bold mb-2" htmlFor="grid-city">Job Title</label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="e.g. 'Engineer' " />
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-sm font-bold mb-2" htmlFor="grid-city">Location</label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="Town or Postcode" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <button className="font-bold leading-tight bg-white hover:text-blue-300 w-full text-cyan-600 hover:bg-white uppercase text-base tracking-wide py-3 px-4 rounded">Search</button>
                    </div>
                </div>

            </form>
        </div>


    );
}

export default Search