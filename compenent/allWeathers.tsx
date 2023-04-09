import {Weather} from "../data/stub";
import { View, StyleSheet, FlatList, TouchableOpacity, AppState, TextInput, ActivityIndicator } from "react-native";
import {cityName} from "../styles/style";
import { WeatherElement } from "./weatherElementList";
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { getWeathers } from "../redux/actions/actionGetWeathers";
import { TabBarIcon } from "./tabIconBar";

export function WeatherList({navigation} : {navigation : NavigationProp<Record<string, object | undefined>, string, any, any>} ) {


      // @ts-ignore
      const {weathers} = useSelector((state : AppState) => state.appReducer);

      const dispatch = useDispatch();

      const [filterData, setFilterData] = useState([]);
      const [masterData, setMasterData] = useState([]);
      const [search, setSearch] = useState('');
  
      useEffect(() => {
        const loadWeathers = async () => {
          // @ts-ignore
          await dispatch(getWeathers());
        };
        loadWeathers();
      }, [dispatch]);

      useEffect(() => {
        setFilterData(weathers);
        setMasterData(weathers);
      }, [weathers]);

      const searchFilter = (text: string) => {
        if (text){
          const newData = masterData.filter((item) =>{
            //@ts-ignore
            const itemData = item.city.name ?
            //@ts-ignore
                          item.city.name.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase()
          return itemData.indexOf(textData) > -1
                          
          });
          setFilterData(newData)
          setSearch(text)
        }
        else {
          setFilterData(masterData)
          setSearch(text)
        }
      }
      if(!weathers.length){
        return(
          <View> 
      <ActivityIndicator size="large" color="#0000ff" />
            
          </View>
        )
      }

      return (
        <View>
          <View style={weatherListStyle.containerSearch}>
            <View style={weatherListStyle.containerIconSearch}>
              <TabBarIcon name="search" color={cityName} size={20}/>
            </View>
            <TextInput
              style={weatherListStyle.inputCitySearch}
              value={search}
              placeholder='Ville'
              onChangeText={(text => searchFilter(text))}>
            </TextInput>
          </View>
           
        <FlatList
          data={filterData}
          keyExtractor={(item: Weather) => item.city.name}
          renderItem={({ item }) => 
              <TouchableOpacity onPress={() => navigation.navigate("DetailScreen", {"weather": item})}>
                <WeatherElement citySelected={item}></WeatherElement>
              </TouchableOpacity>
          }
        />
      </View>
    );
}

const weatherListStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: "white",
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    name: {
      color: cityName,
      fontSize: 15,
      fontWeight: "bold"
    },

    temperature: {
      color: cityName,
      fontSize: 12
    },
    inputCitySearch: {
      fontSize: 15,
      marginLeft: "2%",
      width: "100%",
      height: "100%",
    },
    containerIconSearch: {
      alignItems: "center",
      justifyContent: "center"
    },
    containerSearch: {
      flexDirection: "row",
      padding: 10,
      margin: 5,
      borderRadius: 35
  },

});