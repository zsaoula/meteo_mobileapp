import {CITIES_DATA, WEATHER_DATA} from '../data/stub';
import {appReducer} from "../redux/reducers/appReducer";

// Mock values used in tests
const initialState = {
    cities: [CITIES_DATA],
    weathers: [WEATHER_DATA],
    weatherCurrent: [],
    favoriteCity: []
}

// Reducer for tests => Just call the "true" reducer with our mocked data as initial state
// @ts-ignore
export default testReducer = (state = initialState, action) => {
    //@ts-ignore
  return appReducer(initialState, action);
}