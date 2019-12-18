import React from 'react'
import Weather from './Weather'

const Content = ({ city, weather }) => {
  if (city === 'London') {
    return <></>
  }
  else {
    return <Weather data={weather} />
  }
}

export default Content