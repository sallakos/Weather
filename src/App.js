import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Search'
import MatchList from './MatchList'
import Content from './Content'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const App = () => {

  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('London')

  const hook = () => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fi&APPID=${API_KEY}`)
      .then(response => {
        setWeather(response.data)
      })
  }

  useEffect(hook, [city])

  const handleSearch = (event) => {
    setSearch(event.target.value)
    setCity('London')
  }

  return (
    <div className='container-fluid'>
      <div class='row justify-content-center'>
        <div class='col-4'>
          <Search search={search} handleSearch={handleSearch} />
          <MatchList search={search} setCity={setCity} />
          <Content city={city} weather={weather} />
        </div>
      </div>
    </div>
  )

}

export default App
