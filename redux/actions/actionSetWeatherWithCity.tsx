import {WEATHER_DATA, Weather} from '../constants';

export const setWeatherWithCity = (weather: Weather) => {
  return {
    type: WEATHER_DATA,
    payload: weather
  };
}