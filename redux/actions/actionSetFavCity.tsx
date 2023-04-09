import AsyncStorage from '@react-native-async-storage/async-storage';
import {FAVORITE_CITY} from '../constants';
import { City } from '../../data/stub';

export const setFavCity = (cityFav: City) => {
  try {
    const jsonCity = JSON.stringify(cityFav)
    AsyncStorage.setItem("favorite", jsonCity)
   
  } catch (error) {
    console.log(error);
  }
  return {
    type: FAVORITE_CITY,
    payload: cityFav,
  };
}