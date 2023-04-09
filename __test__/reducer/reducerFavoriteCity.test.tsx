import {CITIES_DATA, City, WEATHER_DATA, Weather} from "../../data/stub";
import {appReducer} from "../../redux/reducers/appReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

describe('test reducer', () => {

    let initialState = {
        cities: [],
        weathers: [],
        weatherCurrent: [],
        favoriteCity: []
    }

    it('should return initial state', () => {
        expect(appReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FAVORITE_CITY', () => {
        const city = CITIES_DATA.find(ville => ville.name == "Paris");
        expect
            appReducer(initialState, {
                type: 'FAVORITE_CITY',
                city,
            })
        ==({
            cities: [],
            weathers: [],
            weatherCurrent: [],
            favoriteCity: [city]
        });
    });

});