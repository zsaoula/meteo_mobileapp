import {City, Weather, WEATHER_DATA} from "../data/stub";
import { View,Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {cityName} from "../styles/style";
import { ReactNode } from "react";

type propsWeather = {
    [x: string]: ReactNode;
    latitude: any,
    longitude: any,
    name: string,
    temperature: any,
    weatherDescription: string,
    dateCity: any,
    timeCity: any
}

export function MainInfosWeather(props: propsWeather) {
    return (
      <View style={mainInfosWeatherStyle.container}>
         <View style={mainInfosWeatherStyle.containerPosition}>
            <Text style={mainInfosWeatherStyle.longAndLatt}>{props.latitude}</Text>
            <Text style={mainInfosWeatherStyle.longAndLatt}>{props.longitude}</Text>
        </View>
            <Text style={mainInfosWeatherStyle.name}>{props.name}</Text>
            <Text>{props.dateCity}</Text>
            <Text>{props.timeCity}</Text>
            {props.children}
            {/* <Image source={require('../assets/image/nuage.png')} style={mainInfosWeatherStyle.image}></Image> */}
            {/* avec weather type -> img */}
            <Text style={mainInfosWeatherStyle.temp}>{Math.floor(props.temperature)}°C</Text>
            <Text style={mainInfosWeatherStyle.desc}>{props.weatherDescription}</Text>
      </View>
    );
};

const mainInfosWeatherStyle = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
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
      desc: {
        fontSize:20,
        fontWeight: "300"
      }

});