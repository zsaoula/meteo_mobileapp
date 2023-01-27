import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WeatherList } from './compenent/allCity';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up !</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <WeatherList></WeatherList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
