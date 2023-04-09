import { WEATHERS_DATA} from '../constants';
import { Weather } from '../../data/stub';

export const setWeathers = (weathersList: Weather[]) => {
  return {
    type: WEATHERS_DATA,
    payload: weathersList,
  };
}