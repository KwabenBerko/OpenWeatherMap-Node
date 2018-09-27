/* 
	OPEN WEATHER MAP WRAPPER FOR NODEJS
	Author: Kwabena Berko
	Email: kwabenaberko95@gmail.com
*/
const request = require("request");

function OpenWeatherMapHelper(config){
	if(!(this instanceof OpenWeatherMapHelper)){
		return new OpenWeatherMapHelper(config);
	}
	this.config = config;
	this.url = 'https://api.openweathermap.org/data/2.5/weather?';
	this.forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?';
	if(config.units) {
		this.url = `${this.url}units=${this.config.units}&`;
		this.forecasturl = `${this.forecasturl}units=${this.config.units}&`;
	};
}

function sendResponse(err, data, callback){
	let error = null;
	let response = null;

	error = err;
	if(data){
		if(data.statusCode != 200){
			let e = JSON.parse(data.body)
			error = new Error(e.message);
			error.status = e.cod;
		}
		if(data.body){
			response = JSON.parse(data.body);
		}
	}

	callback(error, response);
}

//CURRENT WEATHER START
OpenWeatherMapHelper.prototype.getCurrentWeatherByCityName = function(cityName, callback) {
	request.get(`${this.url}q=${cityName}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getCurrentWeatherByCityID = function(cityId, callback) {
	request.get(`${this.url}id=${cityId}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getCurrentWeatherByGeoCoordinates = function(latitude, longitude, callback) {
	request.get(`${this.url}lat=${parseFloat(latitude)}&lon=${parseFloat(longitude)}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getCurrentWeatherByZipCode = function(zipCode, callback) {
	request.get(`${this.url}zip=${zipCode.toString()}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

//CURRENT WEATHER END

//THREE HOUR FORECAST START
OpenWeatherMapHelper.prototype.getThreeHourForecastByCityName = function(cityName, callback) {
	request.get(`${this.forecasturl}q=${cityName}&APPID=${this.config.APPID}`,
 (err, data)=>{
		sendResponse(err, data, callback);
	})
};
OpenWeatherMapHelper.prototype.getThreeHourForecastByCityID = function(cityId, callback) {
	request.get(`${this.forecasturl}id=${cityId}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getThreeHourForecastByGeoCoordinates = function(latitude, longitude, callback) {
	request.get(`${this.forecasturl}lat=${parseFloat(latitude)}&lon=${parseFloat(longitude)}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getThreeHourForecastByZipCode = function(zipCode, callback) {
	request.get(`${this.forecasturl}zip=${zipCode.toString()}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};
//THREE HOUR FORECAST END

module.exports = OpenWeatherMapHelper;

