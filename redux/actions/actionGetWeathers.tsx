import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { City, Weather } from "../constants";
import { getCities } from "./actionGetCities";
import { setWeathers } from "./actionSetWeathers";

//Define your action creators that will be responsible for asynchronous operations
export const getWeathers = () => {
  //In order to use await your callback must be asynchronous using async keyword.
  return async (dispatch: (arg0: { type: Weather[]; payload: Weather[]; }) => void) => {
    //Then perform your asynchronous operations.
    try {
        // @ts-ignore
        const cList = useSelector(state => state.appReducer.cities);
        // Create a const that will hold the react-redux events dispatcher
        const dispatch = useDispatch();
        
        // Let's define a hook that will be used to update the rendered state after the return will be called
        // You cannot perform side-effects outside of a useEffect hook
        useEffect(() => {
            const loadCities = async () => {
                // @ts-ignore
            await dispatch(getCities());
            };
            loadCities();
        }, [dispatch]);
        
        var citiesAPI : any[];
        cList.forEach(async (element: City) => {
            citiesAPI.push(await fetch('https://iut-weather-api.azurewebsites.net/weather/city/name/' + element.name));
        });
      //Have it first fetch data from our starwars url.
    //   const citiesPromise = await fetch('https://iut-weather-api.azurewebsites.net/weathers');
      //Then use the json method to get json data from api/
      const citiesListJson = await citiesPromise.json();
      const citiesList: City[] = citiesListJson.map((elt: City) => new City(elt["name"], elt["latitude"], elt["longitude"]));
      dispatch(setCities(citiesList));
    } catch (error) {
      console.log('Error---------', error);
      //You can dispatch to another action if you want to display an error message in the application
      //dispatch(fetchDataRejected(error))
    }
  }
}