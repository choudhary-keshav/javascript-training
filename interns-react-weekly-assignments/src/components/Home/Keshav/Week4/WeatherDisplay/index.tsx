import React, { useState } from 'react'
import { WeatherDisplayWrapper } from './styles';

const WeatherDisplay = () => {

    const [cityName, setCityName] = useState("");
    const [isFetchErrorOccurred, setIsFetchErrorOccurred] = useState<boolean>(false);
    const [weatherDetails, setWeatherDetails] = useState({
        city: "",
        temperature: null,
        latitude: null,
        longitude: null,
        pressure: null,
        humidity: null,
        country: "",
        description: "",
    });

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=metric';

    const fetchTemperature = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWeatherDetails({
                    city: data.name,
                    temperature: data.main.temp,
                    latitude: data.coord.lat,
                    longitude: data.coord.lon,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    country: data.sys.country,
                    description: data.weather[0].description,
                })
                setIsFetchErrorOccurred(false);
            })
            .catch(error => {
                console.log(error);
                setIsFetchErrorOccurred(true);
            });
    }

    const handleCityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value);
    }

    return (
        <WeatherDisplayWrapper>
            <div className="weatherInputContainer">
                <input className='cityInput' type="text" onChange={handleCityInput} name="" id="" value={cityName} placeholder='Enter City Name' />
                <button disabled={!cityName} onClick={fetchTemperature} className='weatherButton'>Know Weather</button>
            </div>

            {isFetchErrorOccurred && cityName && (
                <p className="apiError">Error in fetching the weather details!</p>
            )}

            {!isFetchErrorOccurred && cityName && (
                <div className="weatherDetailsContainer">
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

        </WeatherDisplayWrapper>
    )
}

export default WeatherDisplay;