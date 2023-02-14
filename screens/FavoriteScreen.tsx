import { StatusBar } from 'expo-status-bar';
import { AppState, StyleSheet, Text, View } from 'react-native';
import { WeatherList } from '../compenent/allWeathers';
import { CityDisplay } from '../compenent/weatherCity';
import {colorBackground} from '../styles/style';
import {FAVORITE_CITY_DATA} from '../data/stub';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export function FavoriteScreen() {

  // @ts-ignore
  const {favoriteCity} = useSelector((state : AppState) => state.appReducer);

      const dispatch = useDispatch();
  
      // useEffect(() => {
      //   const loadWeathers = async () => {
      //     // @ts-ignore
      //     await dispatch(getWeathers());
      //   };
      //   loadWeathers();
      // }, [dispatch]);
      
  return (
    <CityDisplay weatherSelected={favoriteCity}></CityDisplay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBackground
  },
});