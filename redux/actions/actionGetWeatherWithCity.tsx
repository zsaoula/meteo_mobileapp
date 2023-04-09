import { Weather, City } from "../../data/stub";
import { setCities } from "./actionSetCities";
import { setWeatherWithCity } from "./actionSetWeatherWithCity";


export const getWeatherWithCity = (cityName : string) => {

  // @ts-ignore
  return async dispatch => {

    try {

      const weatherPromise = await fetch('https://iut-weather-api.azurewebsites.net/weather/city/name' + cityName);
      const weatherJson = await weatherPromise.json();
      //const weatherJson = JSON.parse(weatherJson);
      const city = new City(weatherJson.city.name, weatherJson.city.latitude, weatherJson.city.longitude);
      const weatherSelected : Weather = new Weather(weatherJson.at, weatherJson.visibility, weatherJson.weatherType, weatherJson.weatherDescription, weatherJson.temperature, weatherJson.temperatureFeelsLike , weatherJson.humidity, weatherJson.windSpeed, weatherJson.pressure, city);
        //at: string, visibility: number, weatherType: string, weatherDescription: string, temperature: number, temperatureFeelsLike: number, humidity: number, windSpeed: number, pressure: number, city: City
      dispatch(setWeatherWithCity(weatherSelected));
    } catch (error) {
      console.log('Error---------', error);
      //You can dispatch to another action if you want to display an error message in the application
      //dispatch(fetchDataRejected(error))
    }
  }
}