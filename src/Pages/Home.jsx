import { useState } from 'react'
import MainHero from '/src/components/MainHero/index.jsx'
import MainFooter from '/src/components/MainFooter/index.jsx'
import MainSearchResults from '/src/components/MainSearchResults/index.jsx'
import Modal from '../components/Modal'
import axios from 'axios'

function Home() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchParams, setSearchParams] = useState({
        keywords: '',
        locationName: '',
        distanceFromLocation: '15',
    });

    const fetchJobs = () => {
        const apiUrl = 'https://www.reed.co.uk/api/1.0/search';
        const apiKey = '59e5ef4d-7d6a-41f6-bd2a-d13c01c79e6d';
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

        // Make the API request using Axios
        axios.get(proxyUrl + apiUrl, {
            params: searchParams,
            headers: {
                'Authorization': `Basic ${btoa(apiKey + ':')}`,
            },
        })
            .then((response) => {
                // Handle the response data
                console.log(response.data);
                setSearchResults(response.data.results)
            })
            .catch((error) => {
                // Handle any errors
                console.error(error);
            });
    };

    return (
        <>
            <MainHero fetchJobs={fetchJobs} searchParams={searchParams} setSearchParams={setSearchParams} />
            <div className="container mx-auto">
                {(searchResults.length > 0) && (
                    <div className="searchResults grid grid-cols-3 gap-4 place-content-center w-full">
                        {searchResults.map((result) => (
                            <MainSearchResults
                                key={result.jobId}
                                jobTitle={result.jobTitle}
                                jobLocation={result.locationName}
                                jobMinSalary={result.minimumSalary}
                                jobMaxSalary={result.maximumSalary}
                                jobPosted={result.date}
                                jobLink={result.jobUrl}
                                closeDate={result.expirationDate}
                            />
                        ))}
                    </div>
                )}
            </div>
            <MainFooter id="footer" />
        </>
    );
}



export default Home