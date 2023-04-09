import {City, CITIES_DATA} from "../../data/stub";
import {setFavCity} from "../../redux/actions/actionSetFavCity";
import AsyncStorage from "@react-native-async-storage/async-storage";


describe('test actions', () => {

    it('should create an action with FAVORITE_CITY type', async () => {
        const payload = CITIES_DATA.find(city => city.name === "Paris") ;
        const expectation = {
            type: 'FAVORITE_CITY',
            nounours: payload,
        };
        
        // @ts-ignore
        expect(setFavCity(payload)) == expectation;
    });
})
