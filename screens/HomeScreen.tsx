import { StyleSheet, Text, View } from 'react-native';
import { WeatherList } from '../compenent/allWeathers';
import { NavigationProp } from "@react-navigation/native";
import {colorBackground} from '../styles/style';

export default function HomeScreen({navigation} : {navigation: NavigationProp<Record<string, object | undefined>, string, any, any>}) {
  return (
    <View style={styles.container}>
        <WeatherList navigation={navigation}></WeatherList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBackground
  },
});