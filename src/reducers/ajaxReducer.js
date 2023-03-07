import { fetchWeather } from "../actions/ajaxActions";
import { FETCH_WEATHER } from "../actions/types";

const initialState = {
  weather: null,
};

export default function weatherReducer (state = initialState, action) {

    switch (action.type) {
      case FETCH_WEATHER: 
      return {
          ...state,
          weather: action.payload
        }

      default:
          return state;
    }
}

export const fetchWeatherAction = payload => ({type: FETCH_WEATHER, payload})

export const setWeather = (data) => (dispatch) => {
  return dispatch(fetchWeatherAction(data))}



