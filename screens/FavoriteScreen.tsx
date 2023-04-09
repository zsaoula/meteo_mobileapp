import { StatusBar } from 'expo-status-bar';
import { AppState, StyleSheet, Text, View } from 'react-native';
import { WeatherList } from '../compenent/allWeathers';
import { CityDisplay } from '../compenent/weatherCity';
import {colorBackground} from '../styles/style';
import {City, Weather} from '../data/stub';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';

export function FavoriteScreen({navigation} : {navigation: NavigationProp<Record<string, object | undefined>, string, any, any>}) {

  // @ts-ignore
  const {weathers, favoriteCity} = useSelector((state : AppState) => state.appReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadFavCity = async () => {
      // @ts-ignore
      await dispatch(getFavCity());
    };
    loadFavCity();
  }, [dispatch]);

  // useEffect(() => {
  //   const loadWeathers = async () => {
  //     // @ts-ignore
  //     await dispatch(getWeathers());
  //   };
  //   loadWeathers();
  // }, [dispatch, weathers]);
  //     // useEffect(() => {
  //     //   const loadWeathers = async () => {
  //     //     // @ts-ignore
  //     //     await dispatch(getWeathers());
  //     //   };
  //     //   loadWeathers();
  //     // }, [dispatch]);

  //     const [favCity, setFavCity] = useState<City | null>(null);
      const [weatherFav, setWeatherFav] = useState(null);

  // useEffect(() => {
  //   async function getFavCity() {
  //     try {
  //       const jsonCity = await AsyncStorage.getItem("favorite");
  //       if (jsonCity !== null) {
  //         let parseJson : City = JSON.parse(jsonCity);
  //         // @ts-ignore
  //         const newCity : City = new City(parseJson._name, parseJson._latitude, parseJson._longitude)
  //         setFavCity(newCity);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  
  //   getFavCity();
  // }, [favCity]);

  useEffect(() => {
    const loadWeatherFav = async () => {
      // console.log("FAV CITY")
      // console.log(favoriteCity)
      setWeatherFav(weathers.find((weather: Weather) => weather.city.name === favoriteCity?.name))
    };
    loadWeatherFav();
  }, [favoriteCity]);

  

      // const weatherFav: Weather = weathers.find((weather : Weather)=> weather.city.name == favoriteCity.name)
      // if(!favCity)
      // {
      //   weatherFav = undefined
      // }
      // else{
      //   weatherFav = weathers.find((weather: Weather) => weather.city.name === favCity.name)
      // }
    
    if(weatherFav === null){
      return(
        <View>
          <Text>NADA</Text>
      </View>
      );
      
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