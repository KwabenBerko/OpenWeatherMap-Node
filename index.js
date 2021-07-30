/* 
	OPEN WEATHER MAP WRAPPER FOR NODEJS
	Author: Kwabena Berko
	Email: kwabenaberko95@gmail.com
*/
const request = require("request");

function OpenWeatherMapHelper(config) {
	if (!(this instanceof OpenWeatherMapHelper)) {
		return new OpenWeatherMapHelper(config);
	}
	this.config = config;
}

function sendResponse(err, data, callback) {
	let error = null;
	let response = null;

	error = err;
	if (data) {
		if (data.statusCode != 200) {
			let e = JSON.parse(data.body)
			error = new Error(e.message);
			error.status = e.cod;
		}
		if (data.body) {
			response = JSON.parse(data.body);
		}
	}

	callback(error, response);
}

//CURRENT WEATHER START
OpenWeatherMapHelper.prototype.getCurrentWeatherByCityName = function (cityName, lang, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${this.config.units}&APPID=${this.config.APPID}&lang=${lang}`,
		(err, data) => {
			sendResponse(err, data, callback);
		})
};

OpenWeatherMapHelper.prototype.getCurrentWeatherByCityID = function (cityId, lang, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=${this.config.units}&APPID=${this.config.APPID}&lang=${lang}`,
		(err, data) => {
			sendResponse(err, data, callback);
		})
};

OpenWeatherMapHelper.prototype.getCurrentWeatherByGeoCoordinates = function (latitude, longitude, lang, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/weather?lat=${parseFloat(latitude)}&lon=${parseFloat(longitude)}&units=${this.config.units}&APPID=${this.config.APPID}&lang=${lang}`,
		(err, data) => {
			sendResponse(err, data, callback);
		})
};

OpenWeatherMapHelper.prototype.getCurrentWeatherByZipCode = function (zipCode, lang, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.toString()}&units=${this.config.units}&APPID=${this.config.APPID}&lang=${lang}`,
		(err, data) => {
			sendResponse(err, data, callback);
		})
};

//CURRENT WEATHER END

//THREE HOUR FORECAST START
OpenWeatherMapHelper.prototype.getThreeHourForecastByCityName = function (cityName, lang, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${this.config.units}&APPID=${this.config.APPID}&lang=${lang}`,
		(err, data) => {
			sendResponse(err, data, callback);
		})
};
OpenWeatherMapHelper.prototype.getThreeHourForecastByCityID = function (cityId, lang, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=${this.config.units}&APPID=${this.config.APPID}&lang=${lang}`,
		(err, data) => {
			sendResponse(err, data, callback);
		})
};

OpenWeatherMapHelper.prototype.getThreeHourForecastByGeoCoordinates = function (latitude, longitude, lang, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${parseFloat(latitude)}&lon=${parseFloat(longitude)}&units=${this.config.units}&APPID=${this.config.APPID}&lang=${lang}`,
		(err, data) => {
			sendResponse(err, data, callback);
		})
};

OpenWeatherMapHelper.prototype.getThreeHourForecastByZipCode = function (zipCode, lang, callback) {
	request.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode.toString()}&units=${this.config.units}&APPID=${this.config.APPID}&lang=${lang}`,
		(err, data) => {
			sendResponse(err, data, callback);
		})
};
//THREE HOUR FORECAST END

module.exports = OpenWeatherMapHelper;

