// export class City {
//     private _name: string;
//     private _latitude: number;
//     private _longitude: number;
  
//     constructor(name: string, latitude: number, longitude: number) {
//       this._name = name;
//       this._latitude = latitude;
//       this._longitude = longitude;
//     }
  
//     get name(): string {
//       return this._name;
//     }
  
//     set name(value: string) {
//       this._name = value;
//     }
  
//     get latitude(): number {
//       return this._latitude;
//     }
  
//     set latitude(value: number) {
//       this._latitude = value;
//     }
  
//     get longitude(): number {
//       return this._longitude;
//     }
  
//     set longitude(value: number) {
//       this._longitude = value;
//     }
//   }
  
//   export class Weather {
//     private _at: string;
//     private _visibility: number;
//     private _weatherType: string;
//     private _weatherDescription: string;
//     private _temperature: number;
//     private _temperatureFeelsLike: number;
//     private _humidity: number;
//     private _windSpeed: number;
//     private _pressure: number;
//     private _city: City;
  
//     constructor(at: string, visibility: number, weatherType: string, weatherDescription: string, temperature: number, temperatureFeelsLike: number, humidity: number, windSpeed: number, pressure: number, city: City) {
//       this._at = at;
//       this._visibility = visibility;
//       this._weatherType = weatherType;
//       this._weatherDescription = weatherDescription;
//       this._temperature = temperature;
//       this._temperatureFeelsLike = temperatureFeelsLike;
//       this._humidity = humidity;
//       this._windSpeed = windSpeed;
//       this._pressure = pressure;
//       this._city = city;
//     }
  
//     get at(): string {
//       return this._at;
//     }
  
//     set at(value: string) {
//       this._at = value;
//     }
  
//     get visibility(): number {
//       return this._visibility;
//     }
  
//     set visibility(value: number) {
//       this._visibility = value;
//     }
  
//     get weatherType(): string {
//       return this._weatherType;
//     }
  
//     set weatherType(value: string) {
//       this._weatherType = value;
//     }
  
//     get weatherDescription(): string {
//       return this._weatherDescription;
//     }
  
//     set weatherDescription(value: string) {
//       this._weatherDescription = value;
//     }
  
//     get temperature(): number {
//       return this._temperature;
//     }
  
//     set temperature(value: number) {
//       this._temperature = value;
//     }
  
//     get temperatureFeelsLike(): number {
//       return this._temperatureFeelsLike;
//     }
  
//     set temperatureFeelsLike(value: number) {
//       this._temperatureFeelsLike = value;
//     }
  
//     get humidity(): number {
//       return this._humidity;
//     }
  
//     set humidity(value: number) {
//       this._humidity = value;
//     }
  
//     get windSpeed(): number {
//       return this._windSpeed;
//     }
  
//     set windSpeed(value: number) {
//       this._windSpeed = value;
//     }
  
//     get pressure(): number {
//       return this._pressure;
//     }
  
//     set pressure(value: number) {
//       this._pressure = value;
//     }
  
//     get city(): City {
//       return this._city;
//     }
  
//     set city(value: City) {
//       this._city = value;
//     }
//   }

//   export const FAVORITE_CITY_DATA =
//   new City("Clermont-Ferrand", 45.777222, 3.087025);

// export const DEFAULT_SELECTED_CITY_DATA: City =
//   new City("Paris", 48.866667, 2.333333);

export const WEATHER_DATA = 'WEATHER_DATA';

export const WEATHERS_DATA = 'WEATHERS_DATA';

export const CITY_DATA = 'CITY_DATA';

export const FAVORITE_CITY = 'FAVORITE_CITY';

export const RESET_FAVORITE_CITY = 'RESET_FAVORITE_CITY';