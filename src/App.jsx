import { useState, useEffect } from 'react'
import './App.css'
import 'animate.css';
import MainNav from '/src/components/MainNav/index.jsx'
import MainHero from '/src/components/MainHero/index.jsx'
import MainFooter from '/src/components/MainFooter/index.jsx'
import MainSearchResults from '/src/components/MainSearchResults/index.jsx'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);

  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    // Set the API endpoint URL
    const apiUrl = 'https://www.reed.co.uk/api/1.0/search';

    // Set the API key
    const apiKey = 'b85ff21b-c075-4a4b-863f-cbfdd2f47c33';

    // Set the search parameters
    const searchParams = {
      keywords: 'accountant',
      locationName: 'London',
      distanceFromLocation: '15',
      // Add more search parameters as needed
    };

    // Set the proxy server URL
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
  }, []);

  return (
    <>
      <MainNav />

      <MainHero />

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



export default App
