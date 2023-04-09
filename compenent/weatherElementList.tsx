import {City, Weather, WEATHER_DATA} from "../data/stub";
import { View,Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {cityName} from "../styles/style";

type weather = {
    citySelected: Weather
}

export function WeatherElement(props: weather) {
      return (
      <View style={weatherListStyle.container}>
         <Text testID="weathersCity-name" style={weatherListStyle.name}>{props.citySelected.city.name}</Text>
         <Text>{Math.floor(props.citySelected.temperature)}°C</Text>
      </View>
            );
};

const weatherListStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: "white",
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    name: {
      color: cityName,
      fontSize: 15,
      fontWeight: "bold"
    },

    temperature: {
      color: cityName,
      fontSize: 12
    }

});