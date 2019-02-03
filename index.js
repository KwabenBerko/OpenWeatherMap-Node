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
	request.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getCurrentWeatherByCityID = function(cityId, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getCurrentWeatherByGeoCoordinates = function(latitude, longitude, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/weather?lat=${parseFloat(latitude)}&lon=${parseFloat(longitude)}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getCurrentWeatherByZipCode = function(zipCode, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.toString()}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

//CURRENT WEATHER END

//THREE HOUR FORECAST START
OpenWeatherMapHelper.prototype.getThreeHourForecastByCityName = function(cityName, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getThreeHourForecastByCityID = function(cityId, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getThreeHourForecastByGeoCoordinates = function(latitude, longitude, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${parseFloat(latitude)}&lon=${parseFloat(longitude)}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getThreeHourForecastByZipCode = function(zipCode, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode.toString()}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};
//THREE HOUR FORECAST END

//SIXTEEN DAY FORECAST END
OpenWeatherMapHelper.prototype.getSixteenDayForecastByCityName = function(cityName, callback) {
  request.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&units=${this.config.units}&APPID=${this.config.APPID}`,
  (err, data)=>{
      OpenWeatherMapHelper.sendResponse(err, data, callback);
  })
};

OpenWeatherMapHelper.prototype.getSixteenDayForecastByCityID = function(cityId, callback) {
  request.get(`https://api.openweathermap.org/data/2.5/forecast/daily?id=${cityId}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getSixteenDayForecastByGeoCoordinates = function(latitude, longitude, callback) {
  request.get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${parseFloat(latitude)}&lon=${parseFloat(longitude)}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};

OpenWeatherMapHelper.prototype.getSixteenDayForecastByZipCode = function(zipCode, callback) {
  request.get(`https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipCode.toString()}&units=${this.config.units}&APPID=${this.config.APPID}`,
	 (err, data)=>{
		sendResponse(err, data, callback);
	})
};
//SIXTEEN DAY FORECAST END

module.exports = OpenWeatherMapHelper;

