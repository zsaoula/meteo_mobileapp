import {Weather, WEATHERS_DATA} from '../constants';

export const setWeathers = (weathersList: Weather[]) => {
  return {
    type: WEATHERS_DATA,
    payload: weathersList,
  };
}