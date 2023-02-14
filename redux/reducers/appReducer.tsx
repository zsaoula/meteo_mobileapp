import { CITY_DATA, WEATHER_DATA,WEATHERS_DATA, FAVORITE_CITY } from "../constants";


const initialState = {
    cities: [],
    weathers: [],
    weatherCurrent: [],
    favoriteCity: []
  }
  
  // @ts-ignore
  export function appReducer (state = initialState, action) {
    switch (action.type) {
      case WEATHERS_DATA:
        return {...state, weathers: action.payload};
      case WEATHER_DATA:
        return {...state, weatherCurrent: action.payload};
      case FAVORITE_CITY:
        // @ts-ignore
        return {...state, favoriteCity: action.payload};
      case CITY_DATA:
        return { ...state, cities: action.payload};
      default:
        return state;
    }
  }