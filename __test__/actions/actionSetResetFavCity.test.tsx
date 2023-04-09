import {City, CITIES_DATA} from "../../data/stub";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setResetFavCity } from "../../redux/actions/actionSetResetFavCity";


describe('test actions', () => {

    it('should create an action with RESET_FAVORITE_CITY type', async () => {
        const payload = null ;
        const expectation = {
            type: 'RESET_FAVORITE_CITY',
            nounours: payload,
        };
        
        // @ts-ignore
        expect(setResetFavCity(payload)) == expectation;
    });
})
