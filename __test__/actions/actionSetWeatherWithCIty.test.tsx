import {City, WEATHER_DATA} from "../../data/stub";
import { setWeatherWithCity } from "../../redux/actions/actionSetWeatherWithCity";

describe('test actions', () => {

    it('should create an action with WEATHER_DATA type', () => {
        const payload = WEATHER_DATA.find(weather => weather.city.name === "Paris") ;
        const expectation = {
            type: 'WEATHER_DATA',
            nounours: payload,
        };
        
        // @ts-ignore
        expect(setWeatherWithCity(payload)) == expectation;
    });
})
