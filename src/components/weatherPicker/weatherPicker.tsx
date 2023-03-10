import { WiCloudy, WiDaySunny, WiFog, WiShowers, WiRain, WiRaindrops, WiThunderstorm } from "react-icons/wi";

export function WeatherPicker (weatherValue:string, size: number) {
  console.log(weatherValue);
  
  switch (weatherValue) {
    case 'Rain':
      return <WiShowers size={size}/>
    case 'Clouds':
      return <WiCloudy size={size}/>
    case 'Clear':
      return <WiDaySunny size={size}/>
    case 'Atmosphere':
      return <WiFog size={size}/>
    case 'Snow':
      return <WiRain size={size}/>
    case 'Drizzle':
      return <WiRaindrops size={size}/>
    case 'Thunderstorm':
      return <WiThunderstorm size={size}/>
    default:
      return
  }
} 