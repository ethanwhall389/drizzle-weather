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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Api)\n/* harmony export */ });\nclass Api {\n    static async forcast (query) {\n        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4018e2169c904008a6b05305231711&q=${query}&days=3`)\n        const data = await response.json();\n        // console.log(data);\n        return data\n    }\n}\n\n\n\n//# sourceURL=webpack://drizzle-weather/./src/api-requests.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-requests */ \"./src/api-requests.js\");\n/* harmony import */ var _process_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./process-info */ \"./src/process-info.js\");\n\n\n\nconst loc = prompt('What is your location?');\n\nasync function getCurrentWeather () {\n    const data = await _api_requests__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forcast(loc);\n    \n    const currentData = _process_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentWeather(data);\n    // console.log(currentData);\n\n    logWeather(currentData);\n\n    return currentData;\n    // console.log(data);\n}\n\nasync function getForecast () {\n    const data = await _api_requests__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forcast(loc);\n\n    const forecastData = _process_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forecastWeather(data);\n    // console.log(forecastData);\n\n    return forecastData;\n    // console.log(data);\n}\n\nfunction logWeather (data) {\n    console.log(data);\n}\n\n\ngetCurrentWeather();\n\n\n\nconsole.log('hiiii');\n\n\n\n//# sourceURL=webpack://drizzle-weather/./src/main.js?");

/***/ }),

/***/ "./src/process-info.js":
/*!*****************************!*\
  !*** ./src/process-info.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Process)\n/* harmony export */ });\nclass Process {\n    static currentWeather (data) {\n        return {\n            'tempC': data.current.temp_c,\n            'tempF': data.current.temp_f,\n            'condition': data.current.condition.text,\n            'precipitation': data.current.precip_in\n        }\n    }\n\n    static forecastWeather (data) {\n        console.log(data);\n        return {\n            'day0': {\n                'sunrise': data.forecast.forecastday[0].astro.sunrise,\n                'sunset': data.forecast.forecastday[0].astro.sunset,\n                'isDark': data.forecast.forecastday[0].astro.is_sun_up,\n                'highC': data.forecast.forecastday[0].day.maxtemp_c,\n                'highF': data.forecast.forecastday[0].day.maxtemp_f,\n                'condition': data.forecast.forecastday[0].day.condition.text,\n                'rainChance': data.forecast.forecastday[0].day.daily_chance_of_rain,\n                'snowChance': data.forecast.forecastday[0].day.daily_chance_of_snow,\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack://drizzle-weather/./src/process-info.js?");

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