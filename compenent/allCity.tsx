import {WEATHER_DATA} from "../data/stub";
import { View,Text, StyleSheet } from "react-native";

export function WeatherList() {
    return (
      <View>
        {WEATHER_DATA.map((weather, index) => (
          <View style={weatherListStyle.container} key={index}>
            <Text>{weather.city.name}</Text>
            <Text>{weather.temperature} °C</Text>
          </View>
        ))}
      </View>
    );
};

const weatherListStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "black",
        padding: 5,
        margin: 5,
        borderRadius: 5
    },

});