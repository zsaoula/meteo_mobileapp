import { City } from "../../data/stub";
import { setCities } from "./actionSetCities";

//Define your action creators that will be responsible for asynchronous operations
export const getCities = () => {
  //In order to use await your callback must be asynchronous using async keyword.
  // @ts-ignore
  return async dispatch => {
    //Then perform your asynchronous operations.
    try {
      //Have it first fetch data from our starwars url.
      const citiesPromise = await fetch('https://iut-weather-api.azurewebsites.net/cities');
      //Then use the json method to get json data from api/
      const citiesListJson = await citiesPromise.json();
      // @ts-ignore
      const citiesList: City[] = citiesListJson.map(elt => new City(elt["name"], elt["latitude"], elt["longitude"]));
      //console.log(citiesList);
      dispatch(setCities(citiesList));


    } catch (error) {
      console.log('Error---------', error);
      //You can dispatch to another action if you want to display an error message in the application
      //dispatch(fetchDataRejected(error))
    }
  }
}