/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useDate } from '../Utils/useDate';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';
import '../index.css';


const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sun)
  const { time } = useDate()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
      else if (iconString.toLowerCase().includes('sun')) {
        setIcon(sun)
      }
    }
  }, [iconString])

  return (<div className="weather-card glow-pop">
  

   <div className='w-[23rem] min-w-[23rem] h-[33rem] glassCard p-5 rounded-xl shadow-xl flex flex-col justify-between'>

      <div className='flex flex-col items-center gap-4 mt-4'>
        <img src={icon} alt={`${conditions || 'weather'} icon`} className='w-20 h-20' />
        <p className='font-extrabold text-6xl flex items-baseline gap-2 text-white drop-shadow'>
  🌡️ {temperature}
  <span className='text-3xl font-medium'>&deg;C</span>
</p>

      </div>

      {/* Location */}
      <div className='text-center font-bold text-xl mt-2'>{place}</div>

      {/* Date & Time */}
      <div className='flex justify-between items-center mt-4 px-2 text-[1.05rem] font-semibold text-white tracking-wide'>
  <p className='bg-black/30 px-3 py-1 rounded-md shadow-md'>
    {new Date().toDateString()}
  </p>
  <p className='bg-black/30 px-3 py-1 rounded-md shadow-md'>
    {time}
  </p>
</div>


      {/* Wind & Humidity */}
      <div className='flex gap-4 mt-6'>
        <div className='flex-1 bg-blue-600 text-white text-center p-3 rounded-lg shadow'>
          <p className='font-semibold text-base'>Wind Speed</p>
          <p className='text-sm mt-1'>{windspeed} km/h</p>
        </div>
        <div className='flex-1 bg-green-600 text-white text-center p-3 rounded-lg shadow'>
          <p className='font-semibold text-base'>Humidity</p>
          <p className='text-sm mt-1'>{humidity} gm/m&#179;</p>
        </div>
      </div>

      {/* Heat Index */}
     <div className='mt-6 flex justify-between items-center text-lg font-semibold'>
  <p className='text-xl'>Heat Index</p>
  <p className='text-xl'>{heatIndex ? heatIndex : 'N/A'}</p>
</div>


      <hr className='border-slate-400 my-2' />

      {/* Conditions */}
      <div className='text-center text-2xl font-semibold mt-3'>{conditions}</div>
    </div>

 </div> )
}

export default WeatherCard;