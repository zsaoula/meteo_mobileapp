import {City, FAVORITE_CITY} from '../constants';

export const setFavCity = (cityFav: City) => {
    console.log("ZZZ");
  return {
    type: FAVORITE_CITY,
    payload: cityFav,
  };
}