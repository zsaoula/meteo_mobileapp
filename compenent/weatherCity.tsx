import {Weather, WEATHER_DATA} from "../data/stub";
import { View,Text, StyleSheet, Image } from "react-native";
import {cityName} from "../styles/style";
import {City} from '../data/stub';

type weatherProps = {
    weatherSelected: Weather
}

export function CityDisplay(props: weatherProps) {
  // console.log(props.city)
      const cityWeather:Weather = props.weatherSelected;
      const dateCity = cityWeather.at.split(" ")[0]
      const timeCity = cityWeather.at.split(" ")[1].slice(0,5)
      return (
        <View style={weatherCityStyle.container}>
          <View style={weatherCityStyle.containerPosition}>
          <Text style={weatherCityStyle.longAndLatt}>{cityWeather.city.latitude}</Text>
          <Text style={weatherCityStyle.longAndLatt}>{cityWeather.city.longitude}</Text>
          </View>
        <Text style={weatherCityStyle.name}>{cityWeather.city.name}</Text>
        <Text>{dateCity}</Text>
        <Text>{timeCity}</Text>
        <Image source={require('../assets/image/nuage.png')} style={weatherCityStyle.image}></Image>
        {/* avec weather type -> img */}
        <Text style={weatherCityStyle.temp}>{Math.floor(cityWeather.temperature)}°C</Text>
        <Text style={weatherCityStyle.desc}>{cityWeather.weatherDescription}</Text>
      </View>
    );
};

const weatherCityStyle = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    name: {
      color: cityName,
      fontSize: 30,
      fontWeight: "bold"
    },
    temp: {
      color: cityName,
      fontSize: 65,
      fontWeight: "bold"
    },
    containerPosition: {
      flexDirection: "row",
      justifyContent:"space-around",
      width: "50%"
    },
    longAndLatt: {
      fontSize: 13,
      fontWeight: "100"
    },
    image: {
      width: 150,
      height: 150
    },
    desc: {
      fontSize:20,
      fontWeight: "300"
    }

});