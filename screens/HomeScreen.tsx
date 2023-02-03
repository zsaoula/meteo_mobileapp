import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WeatherList } from '../compenent/allWeathers';
import { CityDisplay } from '../compenent/weatherCity';
import {colorBackground} from '../styles/style';
import {FAVORITE_CITY_DATA} from '../data/stub';

export function HomeScreen() {
  return (
    <View style={styles.container}>
        <WeatherList></WeatherList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBackground
  },
});