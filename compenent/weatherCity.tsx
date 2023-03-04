import { View,Text, StyleSheet, Image, Pressable, AppState } from "react-native";
import {cityName} from "../styles/style";
import {City, Weather} from '../redux/constants';
import { TabBarIcon } from "./tabIconBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type weatherProps = {
    weatherSelected: Weather
}

export function CityDisplay(props: weatherProps) {

  const [favCity, setFavCity] = useState<City | null>(null);

  useEffect(() => {
    async function getFavCity() {
      try {
        const jsonCity = await AsyncStorage.getItem("favorite");
        if (jsonCity !== null) {
          let parseJson : City = JSON.parse(jsonCity);
          // @ts-ignore
          const newCity : City = new City(parseJson._name, parseJson._latitude, parseJson._longitude)
          setFavCity(newCity);
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    getFavCity();
  }, []);

  async function storeFavCity (cityFav : City) {
    try {
      const jsonCity = JSON.stringify(cityFav)
      await AsyncStorage.setItem("favorite", jsonCity)
      setFavCity(cityFav)
     
    } catch (error) {
      console.log(error);
    }
  };

  async function resetStoreFavCity () {
    try {
      await AsyncStorage.removeItem("favorite")
      setFavCity(null)
     
    } catch (error) {
      console.log(error);
    }
  };


      if(props.weatherSelected != undefined ){
        const cityWeather:Weather = props.weatherSelected;
      const dateCity = cityWeather.at.split(" ")[0]
      const timeCity = cityWeather.at.split(" ")[1].slice(0,5)


      return (
        <View>
          <View style={weatherCityStyle.containerFav}>
           <Pressable onPress={() => favCity?.name !== cityWeather.city.name ? storeFavCity(cityWeather.city) : resetStoreFavCity() }>
            <TabBarIcon name={ favCity?.name === cityWeather.city.name ? "star" :  "star-o"  } color="#A4A4A4" size={35}/>
            </Pressable> 
          </View>
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
    },
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
    image: {
      width: 150,
      height: 150
    },
    desc: {
      fontSize:20,
      fontWeight: "300"
    }

});