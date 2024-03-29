import React from 'react';


function Search({ fetchJobs, searchParams, setSearchParams }) {
    const handleChange = (e) => {
        const { id, value } = e.target;
        setSearchParams((prevSearchParams) => ({
            ...prevSearchParams,
            [id]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchJobs();
    }
    return (
        <div className="flex bg-cover bg-bottom p-10 md:py-32 md:px-16">
            <form className="bg-cyan-600 bg-opacity-75 p-6 rounded-lg w-full"
                onSubmit={handleSubmit}
            >
                <h1 className="font-serif md:text-3xl text-white mb-8">Find your dream JOB today!</h1>
                <div className="flex flex-wrap items-end">
                    <div className=" md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase text-white text-sm font-bold mb-2"
                            htmlFor="keywords">Job Title</label>
                        <input
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                            id="keywords"
                            onChange={handleChange}
                            placeholder="e.g. 'Engineer' "
                            type="text"
                            value={searchParams.keywords}
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                            htmlFor="locationName">Location</label>
                        <input
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                            id="locationName"
                            onChange={handleChange}
                            placeholder="Town or Postcode"
                            type="text"
                            value={searchParams.locationName}
                        />
                    </div>
                    <div className=" w-full md:w-1/3 px-3 md:mb-0">
                        <button
                            className="hover:animate-bounce font-bold bg-white hover:text-blue-300 w-full text-cyan-600 hover:bg-whiteuppercase text-base py-3 px-4 rounded"
                        >Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search
