import {City, Weather, WEATHER_DATA} from "../data/stub";
import { View,Text, StyleSheet, FlatList, TouchableOpacity, AppState } from "react-native";
import {cityName} from "../styles/style";
import { WeatherElement } from "./weatherElementList";
import {useDispatch, useSelector} from 'react-redux';

import {useEffect} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { getCities } from "../redux/actions/actionGetCities";
import { appReducer } from "../redux/reducers/appReducer";
import { getWeathers } from "../redux/actions/actionGetWeathers";

export function WeatherList({navigation} : {navigation : NavigationProp<Record<string, object | undefined>, string, any, any>} ) {
    //return (
      // <View>
      //   {WEATHER_DATA.map((weather, index) => (
      //     <View style={weatherListStyle.container} key={index}>
      //       <Text>{weather.city.name}</Text>
      //       <Text>{weather.temperature} °C</Text>
      //     </View>
      //   ))}
      // </View>
      // const allWeathers = WEATHER_DATA

      // type AppState = ReturnType<typeof appReducer>;

      // @ts-ignore
      const {weathers} = useSelector((state : AppState) => state.appReducer);

      const dispatch = useDispatch();
  
      useEffect(() => {
        const loadWeathers = async () => {
          // @ts-ignore
          await dispatch(getWeathers());
        };
        loadWeathers();
      }, [dispatch]);

      if(!weathers){
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        )
      }
      return (
        <View>
        <FlatList
          data={weathers}
          keyExtractor={(item: Weather) => item.city.name}
          renderItem={({ item }) => 
              <TouchableOpacity onPress={() => navigation.navigate("DetailScreen", {"weather": item})}>
                <WeatherElement citySelected={item}></WeatherElement>
              </TouchableOpacity>
          }
        />
      </View>
    );
}

//     return (
//       <View>
//       <FlatList
//         data={allWeathers}
//         keyExtractor={(item: Weather) => item.city.name}
//         renderItem={WeatherElement}>

//         </FlatList>
//     </View>
//   );
// };

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