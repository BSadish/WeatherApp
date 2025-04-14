import React, { useEffect, useState } from 'react'
import search from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'
import rain from '../assets/rain.png'
 

const Weather = () => {

    const search=async(city)=>{
      try {
        const url=` http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APP_ID}&q=${searchInput.value}`

        const response=await fetch(url);
        const data=await response.JSON;
        console.log(data)
      } catch (error) {
        
      }
    }

    useEffect(()=>{
search("London");
    },[])

    
    

  return (
    <div className='self-center p-[40px] rounded-[10px] bg-linear-gradient weather' >
    <div className="search-bar">
      <input type="text" placeholder='Search' />
      <img src={search} alt=""  />
    </div>
    <img src={clear} alt=""  className="weather-icon"/>
    <p className="temperature">16°c</p>
    <p className="location">London</p>
    <div className="weather_data">

      <div className="col">
        <img src={humidity} alt="" />
        <div>
          <p>91 %</p>
          <span>Humidity</span>
        </div>
      </div>

      <div className="col">
        <img src={wind} alt="" />
        <div>
          <p>3.6 km/hr</p>
          <span>Wind Speed</span>
        </div>
      </div>


    </div>
    </div>
  )
}

export default Weather
