import {configureStore} from '@reduxjs/toolkit'
import {appReducer} from './reducers/appReducer';
import {WEATHER_DATA, WEATHERS_DATA , CITY_DATA, FAVORITE_CITY ,RESET_FAVORITE_CITY } from './constants';

// Reference here all your application reducers
const reducer = {
  appReducer: appReducer,
}
// const middleware = [
//   ...getDefaultMiddleware(),
//   serializableCheck(),
// ];
// @ts-ignore
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,

      //   // Ignore these action types
      //   ignoredActions: [WEATHER_DATA, WEATHERS_DATA , CITY_DATA, FAVORITE_CITY ,RESET_FAVORITE_CITY,],
      //   // Ignore these field paths in all actions
      //   // ignoredActionPaths: ['appReducer.cities','appReducer.weathers','appReducer.weatherCurrent','appReducer.favoriteCity'],
      //   // Ignore these paths in the state
      //   // ignoredPaths: ['items.dates'],
      // },
    }),
});

export default store;
