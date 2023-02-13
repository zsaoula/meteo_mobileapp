import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {colorBackground} from './styles/style';
import Navigation from './navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from "./redux/store";
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaProvider>
            <Navigation/>
    </SafeAreaProvider>
   </Provider>
    
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
