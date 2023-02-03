import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WeatherList } from './compenent/allWeathers';
import { CityDisplay } from './compenent/weatherCity';
import {colorBackground} from './styles/style';
import {FAVORITE_CITY_DATA} from './data/stub';
import Navigation from './navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
   <SafeAreaProvider>
          <Navigation/>
   </SafeAreaProvider> 
    
    // <View style={styles.container}>
    //   <View>
    //     <Text>ZZ</Text>
    //   </View>
    //   <View>
    //     <WeatherList></WeatherList>
      /* <CityDisplay name={'Lyon'}></CityDisplay> */
        /* <CityDisplay name={FAVORITE_CITY_DATA.name}></CityDisplay> */
    //   </View>
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBackground
  },
});
