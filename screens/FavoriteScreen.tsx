import { StatusBar } from 'expo-status-bar';
import { AppState, StyleSheet, Text, View } from 'react-native';
import { WeatherList } from '../compenent/allWeathers';
import { CityDisplay } from '../compenent/weatherCity';
import {colorBackground} from '../styles/style';
import {FAVORITE_CITY_DATA} from '../data/stub';
import { City, Weather } from '../redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export function FavoriteScreen() {

  // @ts-ignore
  const {favoriteCity, weathers} = useSelector((state : AppState) => state.appReducer);

      const dispatch = useDispatch();
  
      // useEffect(() => {
      //   const loadWeathers = async () => {
      //     // @ts-ignore
      //     await dispatch(getWeathers());
      //   };
      //   loadWeathers();
      // }, [dispatch]);

      var weatherFav

      // const weatherFav: Weather = weathers.find((weather : Weather)=> weather.city.name == favoriteCity.name)
      if(favoriteCity.length === 0)
      {
        weatherFav = undefined
      }
      else{
        weatherFav = weathers.find((weather: Weather) => weather.city.name === favoriteCity.name)
      }
      
  return (
    <CityDisplay weatherSelected={weatherFav}></CityDisplay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBackground
  },
});