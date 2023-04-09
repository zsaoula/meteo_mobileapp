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

    it('should handle WEATHERS_DATA', () => {
        const weathers = WEATHER_DATA;
        expect
            appReducer(initialState, {
                type: 'WEATHERS_DATA',
                weathers,
            })
        ==({
            cities: [],
            weathers: [weathers],
            weatherCurrent: [],
            favoriteCity: []
        });
    });

});