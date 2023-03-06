import React, { useEffect } from "react";
import { WeatherDisplay } from "./weatherDisplay";
import { connect } from "react-redux";
import {setWeather } from "../reducers/ajaxReducer";
import { fetchWeather } from "../actions/ajaxActions";

function WeatherDisplayContainerApi (props: any) {
  
  useEffect(()=>{
    fetchWeather()
  }, [ ])

  return <WeatherDisplay weatherState={props.weatherState} setWeather={props.setWeather} />
}
function mapStateToProps(state: any) {
  return{
    weatherState: state.weatherReducer.weatherReducer.weather
  }
}


export const WeatherDisplayContainer = connect(mapStateToProps, {setWeather})(WeatherDisplayContainerApi)