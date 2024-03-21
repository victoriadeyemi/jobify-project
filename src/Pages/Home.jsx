import { useState } from 'react'
import MainHero from '/src/components/MainHero/index.jsx'
import MainFooter from '/src/components/MainFooter/index.jsx'
import MainSearchResults from '/src/components/MainSearchResults/index.jsx'
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
        const apiKey = 'b85ff21b-c075-4a4b-863f-cbfdd2f47c33';
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
                                closeDate={result.closingDate}
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