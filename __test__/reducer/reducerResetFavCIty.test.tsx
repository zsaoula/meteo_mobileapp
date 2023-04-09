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

    it('should handle RESET_FAVORITE_CITY', () => {
        const city = null;
        expect
            appReducer(initialState, {
                type: 'RESET_FAVORITE_CITY',
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