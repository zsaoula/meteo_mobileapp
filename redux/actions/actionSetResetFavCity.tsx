import AsyncStorage from '@react-native-async-storage/async-storage';
import {City, RESET_FAVORITE_CITY} from '../constants';

export const setResetFavCity = () => {
  try {
    AsyncStorage.removeItem("favorite")
   
  } catch (error) {
    console.log(error);
  }
  return {
    type: RESET_FAVORITE_CITY,
    payload: null,
  };
}