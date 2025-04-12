import React, { useEffect, useState } from 'react'

const Weather = () => {

    const [data,setData]=useState([])

    const datafetch=async()=>{
    try {
        const response=await fetch("https://api.example.com/datahttps://api.open-meteo.com/v1/forecast?latitude=27.7017&longitude=85.3206&hourly=temperature_2m");
        const weatherdata=await response.json();
        console.log(weatherdata)
    } catch (error) {
        console.log(error)
    }



}

    
    useEffect(()=>{


    },[data])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[400px] border-2 h-[400px] '>

<div className='flex justify-center mt-3 flex-row gap-2'>

    <input type="text"className='border-2 h-[40px] rounded-[10px] px-4'  />
    <button onClick={()=>{datafetch()}} className='border-2 h-[40px] rounded-[10px] px-2 font-bold bg-blue-400 border-black text-white cursor-pointer'>Search</button>
 
</div>

<div>

</div>

      </div>
    </div>
  )
}

export default Weather
