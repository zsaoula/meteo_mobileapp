import React from 'react';
import {expect} from '@jest/globals';
import {WeatherElement} from "../../compenent/weatherElementList";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {fireEvent, render, screen} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';
import testReducer from "../testAppReducer";





const store = configureStore({
    reducer: {
        appReducer: testReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});


const Wrapper = ({children}) => (<Provider store={store}>{children}</Provider>);

describe('<WeatherElement />', () => {
    test('Assert displayed values', () => {
        const expectedWeathersInfos = store.getState().appReducer.weathers[0];

        render(<Wrapper>
                <WeatherElement citySelected={expectedWeathersInfos}/>
            </Wrapper>)

     
        expect(screen.getByTestId('weathersCity-name')).toHaveTextContent(expectedWeathersInfos.city.name)
    })
});