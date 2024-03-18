import React, { useState } from 'react';
import { WeatherDisplayWrapper } from './styles';
import { ERROR_401, ERROR_404_CITY_ERROR, ERROR_429 } from '../utils/apiErrorMessages';

const WeatherDisplay: React.FC = () => {
  const [cityName, setCityName] = useState<string>('');
  const [apiCode, setApiCode] = useState<number | string>(-1);
  const [weatherDetails, setWeatherDetails] = useState({
    city: '',
    temperature: null,
    latitude: null,
    longitude: null,
    pressure: null,
    humidity: null,
    country: '',
    description: ''
  });

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=metric';

  const fetchTemperature = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setApiCode(data.cod);
        data.cod === 200
          ? setWeatherDetails({
              city: data.name,
              temperature: data.main.temp,
              latitude: data.coord.lat,
              longitude: data.coord.lon,
              pressure: data.main.pressure,
              humidity: data.main.humidity,
              country: data.sys.country,
              description: data.weather[0].description
            })
          : null;
        console.log(data);
      })
      .catch((error) => {
        console.log(error.statusCode, 'rnljsngr');
      });
  };

  const handleCityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  return (
    <WeatherDisplayWrapper>
      <div className='weatherInputContainer'>
        <input className='cityInput' type='text' onChange={handleCityInput} name='' id='' value={cityName} placeholder='Enter City Name' />
        <button disabled={!cityName} onClick={fetchTemperature} className='weatherButton'>
          Know Weather
        </button>
      </div>

      {cityName && apiCode === 200 && (
        <div className='weatherDetailsContainer'>
          <p>City: {weatherDetails.city}</p>
          <p>Temperature: {weatherDetails.temperature}</p>
          <p>Climate: {weatherDetails.description}</p>
          <p>Humidity: {weatherDetails.humidity}</p>
          <p>Pressure: {weatherDetails.pressure}</p>
          <p>Latitude: {weatherDetails.latitude}</p>
          <p>Longitude: {weatherDetails.longitude}</p>
          <p>Country: {weatherDetails.country}</p>
        </div>
      )}

      {apiCode &&
        cityName &&
        (apiCode === '404' ? (
          <p className='apiError'>{ERROR_404_CITY_ERROR}</p>
        ) : apiCode === '429' ? (
          <p className='apiError'>{ERROR_429}</p>
        ) : apiCode === '401' ? (
          <p>{ERROR_401}</p>
        ) : null)}
    </WeatherDisplayWrapper>
  );
};

export default WeatherDisplay;
