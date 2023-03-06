import { fetchWeather } from "../actions/ajaxActions";
import { FETCH_WEATHER } from "../actions/types";

const initialState = {
  weather: null,
  city:''
};

export default function weatherReducer (state = initialState, action) {
    switch (action.type) {
      case FETCH_WEATHER: 
        return {
          ...state,
          weather: action.payload
        }
      case 'SET_WEATHER':
        return {
          ...state,
          weather: action.payload
        }
      case 'GET_WEATHER' :
        console.log(state)
        break

      default:
          return state;
    }
}

export const setWeather = () => {fetchWeather()}

