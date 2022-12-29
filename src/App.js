import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopNav from './components/TopNav';
import WeatherPanel from './components/WeatherPanel';
import { WEATHER_API_URL, WEATHER_API_HEADER_XRAPID_API_KEY, WEATHER_API_HEADER_XRAPID_API_HOST } from './data/config';
import cityNames from './data/city-name.json';
import weatherData from './data/weather.json';
import './index.css';

function App() {

  const [city, setCity] = useState(0);
  const [info, setInfo] = useState(weatherData);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: WEATHER_API_URL,
      params: { lat: cityNames[city].latitude, lon: cityNames[city].longitude },
      headers: {
        'X-RapidAPI-Key': WEATHER_API_HEADER_XRAPID_API_KEY,
        'X-RapidAPI-Host': WEATHER_API_HEADER_XRAPID_API_HOST
      }
    };

    axios.request(options).then(function (response) {
      setInfo(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [city]);

  return (
    <div className="app">
      <div className="container">
        <TopNav cityNames={cityNames} city={city} setCity={setCity} />
        <WeatherPanel info={info} />
      </div>
    </div>
  );
}

export default App;
