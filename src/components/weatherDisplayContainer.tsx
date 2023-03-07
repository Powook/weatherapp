import React, { useEffect } from "react";
import { WeatherDisplay } from "./weatherDisplay";
import { connect } from "react-redux";
import {setWeather } from "../reducers/ajaxReducer";

function WeatherDisplayContainerApi (props: any) {

console.log(props)
  useEffect(()=> {    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=2867714&appid=7841727ef5050281f8361e79d5e987ca`)
    .then(response=>response.json())
    .then(responce=>props.setWeather(responce))   
  }, [ ])

  return <WeatherDisplay weatherState={props.weatherState} />
}
function mapStateToProps(state: any) {

  return{
    weatherState: state.weatherReducer.weatherReducer.weather,
  }
}


export const WeatherDisplayContainer = connect(mapStateToProps, {setWeather})(WeatherDisplayContainerApi)