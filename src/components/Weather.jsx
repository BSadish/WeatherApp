import React, { useEffect, useRef, useState } from 'react'
import search from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'
import rain from '../assets/rain.png'
 

const Weather = () => {

  const inputRef=useRef()
const [weatherdata,Setweatherdata]=useState(false)

const allicon={
  "01d":clear,
  "01n":clear,
  "02d":cloud,
  "02n":cloud,
  "03d":cloud,
  "03n":cloud,
  "04d":drizzle,
  "04n":drizzle,
  "09d":rain,
  "10d":rain,
  "10n":rain,
  "13d":snow,
  "13n":snow,


}


    const look=async(city)=>{

    if(city===""){
      alert("Enter City Name")
      return;
    }
      try {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

        const response=await fetch(url);
        const data=await response.json();

if(!response.ok){
  alert(data.message);
  return;
}

        console.log(data)
        const icon=allicon[data.weather[0].icon]|| clear
        Setweatherdata({
          humidity:data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: icon
        })
      } catch (error) {
        Setweatherdata(false)
        console.log("Error while fetching user data")
      }
    }

    useEffect(()=>{
look("London");
    },[])

    
    

  return (
    <div className='self-center p-[40px] rounded-[10px] bg-linear-gradient weather' >
    <div className="search-bar">
      <input ref={inputRef} type="text" placeholder='Search' />
      <img src={search} alt=""  onClick={()=>{look(inputRef.current.value)}} />
    </div>
    {weatherdata?<>
      <img src={weatherdata.icon} alt=""  className="weather-icon"/>
    <p className="temperature">{weatherdata.temperature}°c</p>
    <p className="location">{weatherdata.location}</p>
    <div className="weather_data">

      <div className="col">
        <img src={humidity} alt="" />
        <div>
          <p>{weatherdata.humidity} %</p>
          <span>Humidity</span>
        </div>
      </div>

      <div className="col">
        <img src={wind} alt="" />
        <div>
          <p>{weatherdata.windSpeed} km/hr</p>
          <span>Wind Speed</span>
        </div>
      </div>


    </div>

    </>:<></>}
   
    </div>
  )
}

export default Weather
