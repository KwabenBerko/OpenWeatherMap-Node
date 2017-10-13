## OpenWeatherMap-Node
An Openweathermap wrapper for nodejs

**You need an API Key to use the OpenWeatherMap API. Head on over to their [website](http://openweathermap.org/) if you don't already have one.**


## Installation

``` javascript
npm install openweathermap-node
```

## Usage

#### Instantiate the OpenWeatherMapHelper class

``` javascript 
const OpenWeatherMapHelper = require("openweathermap-node");
```
#### Set your API Key (Required) 

``` javascript
const helper = new OpenWeatherMapHelper(
	{
		APPID: 'YOUR_OPENWEATHERMAP_API_KEY_GOES_HERE',
		units: "imperial"
	}
);
```


##### Unit Options(Optional, Kelvin by default) : 

1. ```imperial```

2. ```metric```


## Features


### (1) Current Weather
#### Get current weather by City Name:

```javascript
helper.getCurrentWeatherByCityName("Accra", (err, currentWeather) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(currentWeather);
	}
});
```

#### Get current weather by City ID:
```javascript
helper.getCurrentWeatherByCityID("524901", (err, currentWeather) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(currentWeather);
	}
});
```
#### Get current weather by Geographic Coordinates:

```javascript
helper.getCurrentWeatherByGeoCoordinates(5.6037, 0.1870, (err, currentWeather) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(currentWeather);
	}
});
```
#### Get current weather by Zip Code:
```javascript
helper.getCurrentWeatherByZipCode("90003", (err, currentWeather) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(currentWeather);
	}
});
```
### (2) 5 day / 3 hour forecast
#### Get three hour forecast by City Name:
```javascript
helper.getThreeHourForecastByCityName("Pretoria", (err, threeHourForecast) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(threeHourForecast);
	}
});

```
#### Get three hour forecast by City ID:
```javascript
helper.getThreeHourForecastByCityID("524901", (err, threeHourForecast) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(threeHourForecast);
	}
});

```

#### Get three hour forecast by Geographic Coordinates:
```javascript
helper.getThreeHourForecastByGeoCoordinates(6.5244,3.3792, (err, threeHourForecast) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(threeHourForecast);
	}
});

```
#### Get three hour forecast by Zip Code:
```javascript
helper.getThreeHourForecastByZipCode("94040", (err, threeHourForecast) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(threeHourForecast);
	}
});

```


### Upcoming Feature
1. 16 day / daily forecast 

