import React from 'react'

const round = (num) => Math.round(num * 10) / 10


const Weather = ({ data }) => {

  if (data.length !== 0) {
    const main = data.main
    const weather = data.weather[0]

    return (
      <div className='text-center'>
        <h1>{data.name}: sää tällä hetkellä</h1>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} />
        <p>{weather.description}</p>
        <p>Lämpötila: {round(main.temp)} °C</p>
        <p>Tuntuu kuin: {round(main.feels_like)} °C</p>
        <p>Tuulen nopeus: {Math.round(data.wind.speed)} m/s</p>
      </div>
    )
  }
  return <div>Ladataan...</div>

}

export default Weather