import { CITY_DATA } from "../constants";


const initialState = {
    cities: [],
    weathers: [],
    favoriteCity: []
  }
  
  // @ts-ignore
  export function appReducer (state = initialState, action) {
    switch (action.type) {
    //   case ADD_FAVORITE_NOUNOURS:
    //     // @ts-ignore
    //     return {...state, favoriteNounours: state.favoriteNounours.push(action.payload)};
      case CITY_DATA:
        
        // console.log(action.payload);
        
        //initialState.cities = action.payload;
        console.log(initialState.cities);
        return { ...state, cities: action.payload};
      default:
        return state;
    }
  }