/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api-requests.js":
/*!*****************************!*\
  !*** ./src/api-requests.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Api)\n/* harmony export */ });\nclass Api {\n    static async fetchWeather (query) {\n        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4018e2169c904008a6b05305231711&q=${query}&days=3`, {\n            method: \"GET\",\n            mode: \"cors\",\n            // credentials: \"include\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        // console.log(data);\n        return data\n    }\n}\n\n\n\n//# sourceURL=webpack://drizzle-weather/./src/api-requests.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-requests */ \"./src/api-requests.js\");\n/* harmony import */ var _process_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./process-info */ \"./src/process-info.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\nconst defaultLoc = 'Cape Town, South Africa'\n\nfunction checkStorage () {\n    const lastLoc = localStorage.getItem('lastUsedLoc');\n    if (lastLoc != null) {\n        loadWeather(lastLoc)\n    } else {\n        loadWeather(defaultLoc)\n    }\n}\n\nfunction requestUserLocation () {\n    if (navigator.geolocation) {\n        navigator.geolocation.getCurrentPosition( (position) => {\n            //Success\n            const userLat = position.coords.latitude;\n            const userLon = position.coords.longitude;\n            loadWeather(`${userLat},${userLon}`);\n        }, () => {\n            //Failure\n            return; //default loc is already loaded.\n        }, {enableHighAccuracy: true})\n    }\n}\n\nasync function loadWeather (query) {\n    localStorage.setItem ('lastUsedLoc', query);\n    console.log(query);\n    const weatherData = await _api_requests__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchWeather(query)\n    const currentWeather = _process_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentWeather(weatherData);\n    const forecastWeather = _process_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forecastWeather(weatherData);\n\n    _ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currentWeather(currentWeather);\n    _ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forecastWeather(forecastWeather);\n}\n\nfunction queryWeather () {\n    const searchBox = document.querySelector('#search-box');\n    if (searchBox.value != '') {\n        const query = searchBox.value;\n        loadWeather(query);\n    } else {\n        console.log('Please enter a location');\n    }\n}\n\n//EVENT LISTENERS\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    checkStorage();\n    requestUserLocation();  \n});\n\nconst searchBttn = document.querySelector('.search-bttn');\nsearchBttn.addEventListener('click', queryWeather);\n\n\n//# sourceURL=webpack://drizzle-weather/./src/main.js?");

/***/ }),

/***/ "./src/process-info.js":
/*!*****************************!*\
  !*** ./src/process-info.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Process)\n/* harmony export */ });\nclass Process {\n    static currentWeather (data) {\n        return {\n            'location': {\n                'name': data.location.name,\n                'region': data.location.region,\n                'country': data.location.country\n            },\n            'tempC': data.current.temp_c,\n            'tempF': data.current.temp_f,\n            'feelsLikeF': data.current.feelslike_f,\n            'feelsLikeC': data.current.feelslike_c,\n            'highF': data.forecast.forecastday[0].day.maxtemp_f,\n            'highC': data.forecast.forecastday[0].day.maxtemp_c,\n            'lowF': data.forecast.forecastday[0].day.mintemp_f,\n            'lowC': data.forecast.forecastday[0].day.mintemp_c,\n            'condition': data.current.condition.text,\n            'precipitation': data.current.precip_in,\n            'sunrise': data.forecast.forecastday[0].astro.sunrise,\n            'sunset': data.forecast.forecastday[0].astro.sunset\n        }\n    }\n\n    static forecastWeather (data) {\n        console.log(data);\n        return {\n            'numOfDays': data.forecast.forecastday.length,\n            'day0': {\n                'location': {\n                    'name': data.location.name,\n                    'region': data.location.region,\n                    'country': data.location.country\n                },\n                'date': data.forecast.forecastday[0].date,\n                'sunrise': data.forecast.forecastday[0].astro.sunrise,\n                'sunset': data.forecast.forecastday[0].astro.sunset,\n                'isDark': data.forecast.forecastday[0].astro.is_sun_up,\n                'highC': data.forecast.forecastday[0].day.maxtemp_c,\n                'highF': data.forecast.forecastday[0].day.maxtemp_f,\n                'lowF': data.forecast.forecastday[0].day.mintemp_f,\n                'lowC': data.forecast.forecastday[0].day.mintemp_c,\n                'condition': data.forecast.forecastday[0].day.condition.text,\n                'rainChance': data.forecast.forecastday[0].day.daily_chance_of_rain,\n                'snowChance': data.forecast.forecastday[0].day.daily_chance_of_snow,\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack://drizzle-weather/./src/process-info.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n    static currentWeather (weatherData) {\n        this.dispGeneralInfo(weatherData);\n        this.dispSpecificInfo(weatherData);\n        console.log('weatherData:');\n        console.log(weatherData);\n        console.log(`${weatherData.location.name}, ${weatherData.location.region}`);\n        console.log('current:');\n    }\n\n    static forecastWeather (weatherData) {\n        this.dispDaily(weatherData);\n        \n        console.log(`${weatherData.day0.location.name}, ${weatherData.day0.location.region}`);\n        console.log('forecast:')\n        console.log(weatherData);\n    }\n\n    static dispGeneralInfo (weatherData) {\n        const conditions = document.querySelector('.conditions-cont .condition')\n        conditions.textContent = weatherData.condition;\n\n        const location = document.querySelector('.general-info .location');\n        location.textContent = `${weatherData.location.name}, ${weatherData.location.region}`;\n\n        const temp = document.querySelector('.general-info .temp');\n        temp.textContent = weatherData.tempF;\n\n        const high = document.querySelector('.general-info .high');\n        high.textContent = `High: ${weatherData.highF}\\u00B0`;\n\n        const low = document.querySelector('.general-info .low');\n        low.textContent = `Low: ${weatherData.lowF}\\u00B0`;\n    }\n\n    static dispSpecificInfo (weatherData) {\n        const sunrise = document.querySelector('.specific-info .sunrise');\n        sunrise.textContent = `Sunrise: ${weatherData.sunrise}`;\n\n        const sunset = document.querySelector('.specific-info .sunset');\n        sunset.textContent = `Sunset: ${weatherData.sunset}`;\n\n        const precipitation = document.querySelector('.specific-info .rain');\n        precipitation.textContent = `Chance of rain: ${weatherData.precipitation}%`;\n\n        const feelsLike = document.querySelector('.specific-info .index');\n        feelsLike.textContent = `Feels like: ${weatherData.feelsLikeF}\\u00B0`;\n    }\n\n    static dispDaily (weatherData) {\n        const daysCont = document.querySelector('.days-cont');\n        for (let i = 0; i < weatherData.numOfDays; i++) {\n            const dayCont = document.createElement('div');\n            dayCont.classList.add('day-cont');\n\n            const day = document.createElement('p');\n            day.classList.add('day');\n            day.textContent = weatherData[`day${i}`].date;\n\n            const highLowCont = document.createElement('div');\n            highLowCont.classList.add('high-low');\n\n            const high = document.createElement('span');\n            high.classList.add('high');\n            high.textContent = `H: ${weatherData['day' + i].highF}\\u00B0`;\n            \n            const low = document.createElement('span');\n            low.classList.add('low');\n            low.textContent = `L: ${weatherData['day' + i].lowF}\\u00B0`;\n\n            const icon = this.createIcon(weatherData['day' + i].condition);\n\n            dayCont.appendChild(day);\n            highLowCont.appendChild(high);\n            highLowCont.appendChild(low);\n            dayCont.appendChild(highLowCont)\n            dayCont.appendChild(icon);\n            daysCont.appendChild(dayCont);\n        }\n        //use a for loop to go through each \n    }\n\n    static createIcon (con) {\n        const icon = document.createElement('i');          \n\n        const low = con.toLowerCase();\n\n        if (low === 'sunny') {\n            icon.classList.add('fa-regular', 'fa-sun');\n        } else if (low === 'clear') {\n            icon.classList.add('fa-regular', 'fa-moon');\n        } else if (low === 'partly cloudy') {\n            icon.classList.add('fa-solid', 'fa-cloud-sun');\n        } else if (low === 'cloudy' || low === 'overcast') {\n            icon.classList.add('fa-solid', 'fa-cloud');\n        } else if (low === 'mist' || low.includes('drizzle') || low.includes('ice') || low.includes('sleet')) {\n            icon.classList.add('fa-solid', 'fa-cloud-rain');\n        } else if (low === 'fog') {\n            icon.classList.add('fa-solid', 'fa-smog');\n        } else if (low.includes('heavy') && low.includes('drizzle') || con.includes('rain')) {\n            icon.classList.add('fa-solid', 'fa-cloud-showers-heavy');\n        } else if (low.includes('rain')) {\n            icon.classList.add('fa-solid', 'fa-cloud-rain');\n        } else if (low.includes('snow') || low.includes('blizzard')) {\n            icon.classList.add('fa-regular', 'fa-snowflake');\n        } else if (low.includes('thundery')) {\n            icon.classList.add('fa-solid', 'fa-cloud-bolt');\n        }\n        return icon;\n    }\n}\n\n//# sourceURL=webpack://drizzle-weather/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;