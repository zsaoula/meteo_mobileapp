import { StatusBar } from 'expo-status-bar';
import { AppState, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CityDisplay } from '../compenent/weatherCity';
import {colorBackground} from '../styles/style';
import {City, Weather} from '../data/stub';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherElement } from '../compenent/weatherElementList';
import { getWeathers } from '../redux/actions/actionGetWeathers';
import { TextInput } from 'react-native-gesture-handler';

  export function ThemeScreen(){ 
      return (
        <View>
          
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBackground
  },
});