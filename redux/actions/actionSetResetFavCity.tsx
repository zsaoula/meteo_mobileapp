import {City, RESET_FAVORITE_CITY} from '../constants';

export const setResetFavCity = () => {
  return {
    type: RESET_FAVORITE_CITY,
    payload:null,
  };
}