import React, { useState } from 'react'
import axios from "axios"
function Weather() {
    const apikey="7de1771aed3727c40e7e6c84c1aff945";
    const [city,setCity]=useState("");
    const [weather,setWeather]=useState();
    const handleCityChange=(e)=>{
        setCity(e.target.value)
    }
    const fetchWeather=async()=>{
        try{
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
            console.log(response);
            
            setWeather(response);
            
            
            
        }
        catch(error){
            console.log(error);
        }
    }
    const handleClick=()=>{
        try{
            fetchWeather();
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <div className='outercontainer'>
        <h1>Weather</h1>
        <div className='input-div'>
            <input type="text" placeholder='Enter city name' value={city} onChange={handleCityChange} />
            <span><button onClick={handleClick}>Search</button></span>
        </div>
        <div className="response-div">
            {
                weather && <div>
                    <h3>{weather.data.name}</h3>
                    <h5>{weather.data.weather[0].main}</h5>
                    <h5>{weather.data.weather[0].description}</h5>
                    <h5>Temperature is{parseFloat((weather.data.main.temp - 273.15).toFixed(2))}</h5>
                    <h5>Minimum Temp:{parseFloat((weather.data.main.temp_min - 273.15).toFixed(2))}</h5>
                    <h5>Maximum Temp:{parseFloat((weather.data.main.temp_max - 273.15).toFixed(2))}</h5>
                    
                </div>
            }
            
        </div>
    </div>
  )
}

export default Weather