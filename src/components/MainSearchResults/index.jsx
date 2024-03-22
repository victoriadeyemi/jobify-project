import react from 'react';



function MainSearchResults({ jobTitle, jobLocation, jobMinSalary, jobPosted, jobMaxSalary, jobLink, closeDate }) {
    return (
        <div className="flex flex-wrap justify-center mx-auto px-20 py-5 grid grid-cols-2 ">
            <div className="p-4 max-w-sm">
                <div className="CardSearch hover:animate-pulse bg-cyan-600 bg-opacity-75 flex rounded-lg h-full p-8 flex-col min-w-80">
                    <div className="flex items-center mb-3">
                        <div
                            className=" w-8 h-8 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <h2 className="text-white dark:text-white text-lg font-medium">{jobTitle}</h2>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                            <p className="text-black font-bold p-2 hover:text-white">Date Posted: {jobPosted}</p>
                            <p className="text-white font-bold p-2 hover:text-black">Salary: £{jobMinSalary} - £{jobMaxSalary}</p>
                            <p className="text-violet-600 font-bold p-2 hover:text-white">Location: {jobLocation}</p>
                            <p className="text-black font-bold p-2 hover:text-white">Job Closes: {closeDate}</p>
                            <a href={jobLink}target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View Job
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainSearchResults;
