import { View,Text, StyleSheet, Image, Pressable, AppState } from "react-native";
import {cityName} from "../styles/style";
import {City, Weather} from '../redux/constants';
import { TabBarIcon } from "./tabIconBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { appReducer } from "../redux/reducers/appReducer";
import { setFavCity } from "../redux/actions/actionSetFavCity";
import { setResetFavCity } from "../redux/actions/actionSetResetFavCity";
import { nothing } from "immer";

type weatherProps = {
    weatherSelected: Weather
}

export function CityDisplay(props: weatherProps) {
  // @ts-ignore
  const {favoriteCity} = useSelector((state : AppState) => state.appReducer);

  const dispatch = useDispatch();
  
      useEffect(() => {
        const loadWeathers = async () => {
          // @ts-ignore
          await dispatch(useSelector((state : AppState) => state.appReducer.favoriteCity));
        };
        loadWeathers();
      }, [dispatch]);

  // console.log(props.city)
  console.log(props.weatherSelected)

      if(props.weatherSelected != undefined ){
        const cityWeather:Weather = props.weatherSelected;
      const dateCity = cityWeather.at.split(" ")[0]
      const timeCity = cityWeather.at.split(" ")[1].slice(0,5)

      if(favoriteCity.name === cityWeather.city.name){
        console.log("SIUU")
      }
      return (
        <View>
          <View style={weatherCityStyle.containerFav}>
           <Pressable onPress={() => favoriteCity.name !== cityWeather.city.name ? dispatch(setFavCity(cityWeather.city)) : dispatch(setResetFavCity()) }>
            <TabBarIcon name={favoriteCity.name === cityWeather.city.name ? "star" :  "star-o"  } color="#A4A4A4" size={35}/>
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