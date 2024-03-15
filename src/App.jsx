import { useState, useEffect } from 'react'
import './App.css'
import MainNav from '/src/components/MainNav/index.jsx'
import Hero from '/src/components/MainHero/index.jsx'
import axios from 'axios'


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set the API endpoint URL
    const apiUrl = 'https://www.reed.co.uk/api/1.0/search';

    // Set the API key
    const apiKey = '2461cb12-4726-4b4c-8409-75aed7f5fb9d';

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
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <>
      <MainNav />

      <Hero />
    </>

  );
}



export default App
