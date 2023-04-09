import AsyncStorage from '@react-native-async-storage/async-storage';
import {RESET_FAVORITE_CITY} from '../constants';
import {City} from "../../data/stub";

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