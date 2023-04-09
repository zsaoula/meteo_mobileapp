import {City, WEATHER_DATA, Weather} from "../../data/stub";
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

    it('should handle WEATHER_DATA', () => {
        const weather = WEATHER_DATA.find(weather => weather.city.name == "Paris");
        expect
            appReducer(initialState, {
                type: 'WEATHER_DATA',
                weather,
            })
        ==({
            cities: [],
            weathers: [],
            weatherCurrent: [weather],
            favoriteCity: []
        });
    });

});