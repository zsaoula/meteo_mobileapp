import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WeatherList } from './compenent/allWeathers';
import { CityDisplay } from './compenent/weatherCity';
import {colorBackground} from './styles/style';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up !</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <View>
        <Text>ZZ</Text>
      </View>
      <View>
        <WeatherList></WeatherList>
        {/* <CityDisplay name={'Clermont-Ferrand'}></CityDisplay> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBackground
  },
});
