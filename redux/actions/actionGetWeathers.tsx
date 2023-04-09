import { useEffect } from "react";
import { AppState } from "react-native";
import { useDispatch, useSelector, useStore } from "react-redux";
import { City, Weather } from "../../data/stub";
import { getCities } from "./actionGetCities";
import { setWeathers } from "./actionSetWeathers";

export const getWeathers = () => {

    // @ts-ignore
    return async dispatch => {
      try {
        var weathersList: Weather[] = [];

        const citiesPromise = await fetch('https://iut-weather-api.azurewebsites.net/cities');
        //Then use the json method to get json data from api/
        const citiesListJson = await citiesPromise.json();
        // @ts-ignore
        const cities: City[] = citiesListJson.map(elt => new City(elt["name"], elt["latitude"], elt["longitude"]));
        
        //console.log(cities);

        for (let i = 0; i < cities.length; i++) {
          const weatherPromise = await fetch(`https://iut-weather-api.azurewebsites.net/weather/city/name/${cities[i].name}`);
          const weatherJson = await weatherPromise.json();
        //   const weatherJson = JSON.parse(weatherJson);
        const city = new City(weatherJson.city.name, weatherJson.city.latitude, weatherJson.city.longitude);
        const weatherI : Weather = new Weather(weatherJson.at, weatherJson.visibility, weatherJson.weatherType, weatherJson.weatherDescription, weatherJson.temperature, weatherJson.temperatureFeelsLike , weatherJson.humidity, weatherJson.windSpeed, weatherJson.pressure, city);
          weathersList.push(weatherI);
        }
  
        dispatch(setWeathers(weathersList));
      } catch (error) {
        console.log('Error---------', error);
      }
    };
  };
  