import { View,Text, StyleSheet, Image, Pressable, AppState } from "react-native";
import {cityName} from "../styles/style";
import {City, Weather} from '../data/stub';
import { TabBarIcon } from "./tabIconBar";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Circle } from "react-native-svg";
import { getFavCity } from "../redux/actions/actionGetFavCity";
import { setFavCity } from "../redux/actions/actionSetFavCity";
import { setResetFavCity } from "../redux/actions/actionSetResetFavCity";
import { MainInfosWeather } from "./mainInfosWeather";

type weatherProps = {
    weatherSelected: Weather
}

export function CityDisplay(props: weatherProps) {

  // @ts-ignore
  const {favoriteCity} = useSelector((state : AppState) => state.appReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadFavCity = async () => {
      // @ts-ignore
      await dispatch(getFavCity());
    };
    loadFavCity();
  }, [dispatch]);


      if(props.weatherSelected != undefined ){
        const cityWeather:Weather = props.weatherSelected;
      const dateCity = cityWeather.at.split(" ")[0]
      const timeCity = cityWeather.at.split(" ")[1].slice(0,5)



      return (
        <View>
          <View style={weatherCityStyle.containerFav}>
            <Pressable onPress={() => favoriteCity?.name !== cityWeather.city.name ? dispatch(setFavCity(cityWeather.city)) : dispatch(setResetFavCity()) }>
              <TabBarIcon name={ favoriteCity?.name === cityWeather.city.name ? "star" :  "star-o"  } color="#A4A4A4" size={35}/>
            </Pressable> 
          </View>
          <View style={weatherCityStyle.containerTop}>
            <MainInfosWeather latitude={cityWeather.city.latitude} longitude={cityWeather.city.longitude} name={cityWeather.city.name} temperature={Math.floor(cityWeather.temperature)} weatherDescription={cityWeather.weatherDescription} dateCity={dateCity} timeCity={timeCity} >
              <Image style={weatherCityStyle.image} source={require('../assets/image/nuage.png')}></Image>
            </MainInfosWeather>
              {/* <View style={weatherCityStyle.containerPosition}>
                <Text style={weatherCityStyle.longAndLatt}>{cityWeather.city.latitude}</Text>
                <Text style={weatherCityStyle.longAndLatt}>{cityWeather.city.longitude}</Text>
              </View>
              <Text style={weatherCityStyle.name}>{cityWeather.city.name}</Text>
              <Text>{dateCity}</Text>
              <Text>{timeCity}</Text>
              
              {/* avec weather type -> img */}
              {/* <Text style={weatherCityStyle.temp}>{Math.floor(cityWeather.temperature)}°C</Text>
              <Text style={weatherCityStyle.desc}>{cityWeather.weatherDescription}</Text> */}
          </View>
          <View>
            <View>
              {/* <Text>Humidité</Text> */}
              {/* <View>
                <svg>
                  <Circle>

                  </Circle>
                </svg>
              </View> */}    
            </View>
            <View>
              {/* <Text>Ressenti</Text> */}
              <Text>{cityWeather.temperatureFeelsLike}</Text>
            </View>
            {/* humidity, pressure, temperatureFeelsLike, visibility, weatherDescription, weatherType, windSpeed */}
          </View>
      </View>
    );
      }
      
      return (
        <View>
          <Text>
             Pas de favori
          </Text>
         
        </View>
      );
      };
      

const weatherCityStyle = StyleSheet.create({
    containerFav: {
      alignItems: "flex-end",
      paddingTop: "3%",
      paddingRight: "3%"

    },
    containerTop: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%"
    },
    containerMid: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      height: "100%"
  },
  containerBottom: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%"
  },
  image: {
    width: 150,
    height: 150
  }
    // name: {
    //   color: cityName,
    //   fontSize: 30,
    //   fontWeight: "bold"
    // },
    // temp: {
    //   color: cityName,
    //   fontSize: 65,
    //   fontWeight: "bold"
    // },
    // containerPosition: {
    //   flexDirection: "row",
    //   justifyContent:"space-around",
    //   width: "50%"
    // },
    // longAndLatt: {
    //   fontSize: 13,
    //   fontWeight: "100"
    // },
    // image: {
    //   width: 150,
    //   height: 150
    // },
    // desc: {
    //   fontSize:20,
    //   fontWeight: "300"
    // }

});