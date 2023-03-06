import React from "react"
import styles from './weatherDisplay.module.css'

export function WeatherDisplay (props:any) {
  console.log(props)
  return <div className={styles.weather}>
    weather
    <button onClick={props.setWeather}>fetch</button>
  </div>
}