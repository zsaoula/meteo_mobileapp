import {WEATHER_DATA} from '../constants';
import { Weather } from '../../data/stub';

export const setWeatherWithCity = (weather: Weather) => {
  return {
    type: WEATHER_DATA,
    payload: weather
  };
}