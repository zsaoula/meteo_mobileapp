import {CITIES_DATA, City, WEATHER_DATA, Weather} from "../../data/stub";
import {appReducer} from "../../redux/reducers/appReducer";

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

    it('should handle CITY_DATA', () => {
        const cities = CITIES_DATA;
        expect
            appReducer(initialState, {
                type: 'CITY_DATA',
                cities,
            })
        ==({
            cities: [cities],
            weathers: [],
            weatherCurrent: [],
            favoriteCity: []
        });
    });

});