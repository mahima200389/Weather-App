import { useState, useEffect, useRef } from 'react'
import './App.css'
import './index.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import { WeatherCard, MiniCard, BackgroundLayout } from './Components'

function App() {
  const [input, setInput] = useState('')
  const { weather, thisLocation, values, place, setPlace } = useStateContext()
  const cardRef = useRef(null)

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [weather])

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full py-6 px-4 md:px-8 flex justify-between items-center'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-white px-4 py-1 bg-black/30 rounded-md'>
          Weather App
        </h1>

        <div className='bg-white w-[20rem] md:w-[24rem] overflow-hidden shadow-xl rounded-full flex items-center px-4 py-2 gap-3 hover:shadow-2xl transition-shadow duration-300'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') submitCity()
            }}
            type="text"
            placeholder='Search city...'
            className='focus:outline-none w-full text-[#212121] text-lg font-medium placeholder:text-gray-500'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      </nav>

      <BackgroundLayout />

      <main className='w-full flex flex-col items-center gap-12 mt-16 px-[10%]'>
        <div ref={cardRef} className="w-full flex justify-center">
          <WeatherCard
            key={weather.temp + weather.humidity + weather.wspd} // triggers glow on update
            place={thisLocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />
        </div>

        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {values?.slice(1, 7).map(curr => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
