import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CityDisplay } from '../compenent/weatherCity';
import {colorBackground} from '../styles/style';
import {City, FAVORITE_CITY_DATA, Weather} from '../data/stub';
import { RouteProp } from '@react-navigation/native';

type Props = {
  route: RouteProp<Record<string, any>, string>;
}

// export function DetailScreen({route} : {route : RouteProp<Record<string, object | undefined>, string>}) {
  export function SearchScreen({route}: Props){ 
    //  const routeParams:City = route.params?.weatherCity as City;
  return (
    <CityDisplay weatherSelected={route.params?.weather}></CityDisplay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBackground
  },
});