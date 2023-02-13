import { Weather, City } from "../constants";
import { setCities } from "./actionSetCities";

//Define your action creators that will be responsible for asynchronous operations
export const getWeather = (cityName : string) => {
  //In order to use await your callback must be asynchronous using async keyword.
  // @ts-ignore
  return async dispatch => {
    //Then perform your asynchronous operations.
    try {
      //Have it first fetch data from our starwars url.
      const weatherPromise = await fetch('https://iut-weather-api.azurewebsites.net/weather/city/name' + cityName);
      //Then use the json method to get json data from api/
      const weatherJson = await weatherPromise.json();
      const weatherData = JSON.parse(weatherJson);
        const city = new City(weatherData.city.name, weatherData.city.latitude, weatherData.city.longitude);
        const weatherSelected : Weather = new Weather(weatherData.at, weatherData.visibility, weatherData.weatherType, weatherData.weatherDescription, weatherData.temperature, weatherData.temperatureFeelsLike , weatherData.humidity, weatherData.windSpeed, weatherData.pressure, city);
        //at: string, visibility: number, weatherType: string, weatherDescription: string, temperature: number, temperatureFeelsLike: number, humidity: number, windSpeed: number, pressure: number, city: City
      //   dispatch(setCities(weatherSelected));
    } catch (error) {
      console.log('Error---------', error);
      //You can dispatch to another action if you want to display an error message in the application
      //dispatch(fetchDataRejected(error))
    }
  }
}