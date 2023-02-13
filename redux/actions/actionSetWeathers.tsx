import {Weather, WEATHER_DATA} from '../constants';

export const setWeathers = (weathersList: Weather[]) => {
  return {
    type: WEATHER_DATA,
    payload: weathersList,
  };
}