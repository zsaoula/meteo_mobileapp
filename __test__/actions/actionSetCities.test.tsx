import {City, CITIES_DATA} from "../../data/stub";
import { setCities } from "../../redux/actions/actionSetCities";

describe('test actions', () => {

    it('should create an action with CITY_DATA type', () => {
        const payload = CITIES_DATA ;
        const expectation = {
            type: 'CITY_DATA',
            nounours: payload,
        };
        
        // @ts-ignore
        expect(setCities(payload)) == expectation;
    });
})
