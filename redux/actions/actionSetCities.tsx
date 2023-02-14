import {City, CITY_DATA} from '../constants';

export const setCities = (citiesList: City[]) => {
  // console.log("tt");
  // console.log(citiesList);

  return {
    type: CITY_DATA,
    payload: citiesList
  };
}