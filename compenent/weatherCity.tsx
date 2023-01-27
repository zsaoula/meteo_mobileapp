import {WEATHER_DATA} from "../data/stub";
import { View,Text, StyleSheet, FlatList } from "react-native";
import {cityName} from "../styles/style";

type cityProps = {
    name: string
}

export function CityDisplay(props: cityProps) {
      const allWeathers = WEATHER_DATA.filter(weather => weather.city.name === props.name)
      return (
        <View>
        <Text>{allWeathers[0].city.name}</Text>
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