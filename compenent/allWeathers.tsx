import {City, Weather, WEATHER_DATA} from "../data/stub";
import { View,Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {cityName} from "../styles/style";
import { WeatherElement } from "./weatherElementList";

export function WeatherList() {
    //return (
      // <View>
      //   {WEATHER_DATA.map((weather, index) => (
      //     <View style={weatherListStyle.container} key={index}>
      //       <Text>{weather.city.name}</Text>
      //       <Text>{weather.temperature} °C</Text>
      //     </View>
      //   ))}
      // </View>
      const allWeathers = WEATHER_DATA
    
      function selectedCity(city: City) {
        //appel vu
      }

      return (
        <View>
        <FlatList
          data={allWeathers}
          keyExtractor={(item: Weather) => item.city.name}
          renderItem={({ item }) => 
              <TouchableOpacity onPress={() => selectedCity(item.city)}>
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