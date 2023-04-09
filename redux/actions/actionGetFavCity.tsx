import AsyncStorage from "@react-native-async-storage/async-storage";
import { City } from "../../data/stub";
import { setFavCity } from "./actionSetFavCity";

//Define your action creators that will be responsible for asynchronous operations
export const getFavCity = () => {
  //In order to use await your callback must be asynchronous using async keyword.
  // @ts-ignore
  return async dispatch => {
    try {
        const jsonCity = await AsyncStorage.getItem("favorite");
        if (jsonCity !== null) {
          let parseJson : City = JSON.parse(jsonCity);
          // @ts-ignore
          const newCity : City = new City(parseJson._name, parseJson._latitude, parseJson._longitude)
          dispatch(setFavCity(newCity));
        }
      } catch (error) {
        console.log(error);
      }
  }
}