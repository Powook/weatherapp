import React from "react"
import styles from './City.module.css'

export function City (props:any) {
  return <div className={styles.cityBlock}>
    <h1>City:{props.city? props.city : 'loading...'} </h1>
  </div>
}