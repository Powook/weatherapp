import React from "react"
import { City } from "./City/City"
import styles from './weatherDisplay.module.css'



export function WeatherDisplay (props:any) {
  console.log(props.weatherState)
  return <div className={styles.weather}>
    <div className={styles.graduces}>{ props.weatherState ?  (props.weatherState.list[0].main.temp /57.32).toFixed(2)+'°C' : 'loading...'}</div>
    <div>
      <City city={props.weatherState? props.weatherState.city.name : null} />
    </div>
  </div>
}