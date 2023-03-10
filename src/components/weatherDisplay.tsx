import React from "react"
import { City } from "./City/City"
import styles from './weatherDisplay.module.css'
import { WeatherPicker } from "./weatherPicker/weatherPicker"



export function WeatherDisplay (props:any) {
  return <div className={styles.weather}>
    <div className={styles.graducesWithIcon}>
      <div className={styles.graduces}>{ props.weatherState ?  (props.weatherState.list[0].main.temp /57.32).toFixed(2)+'°C' : 'loading...'}</div>
      <div className={styles.graducesIcon}>{ props.weatherState ?  WeatherPicker(props.weatherState.list[0].weather[0].main, 92) : 'loading...'}</div>
    </div>
    <div>
      <City city={props.weatherState? props.weatherState.city.name : null} />
    </div>
  </div>
}