import {City, WEATHER_DATA} from "../../data/stub";
import { setWeathers } from "../../redux/actions/actionSetWeathers";

describe('test actions', () => {

    it('should create an action with WEATHERS_DATA type', () => {
        const payload = WEATHER_DATA ;
        const expectation = {
            type: 'WEATHERS_DATA',
            nounours: payload,
        };
        
        // @ts-ignore
        expect(setWeathers(payload)) == expectation;
    });
})
