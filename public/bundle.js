/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _testobj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testobj */ \"./src/script/testobj.js\");\n\r\n\r\n\r\nObject(_testobj__WEBPACK_IMPORTED_MODULE_0__[\"CheckCart\"])(_testobj__WEBPACK_IMPORTED_MODULE_0__[\"cart\"], \"Empire State Building\", \"8-800-555-35-35\");\r\n\n\n//# sourceURL=webpack:///./src/script/index.js?");

/***/ }),

/***/ "./src/script/testobj.js":
/*!*******************************!*\
  !*** ./src/script/testobj.js ***!
  \*******************************/
/*! exports provided: chart, cart, CheckCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chart\", function() { return chart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cart\", function() { return cart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CheckCart\", function() { return CheckCart; });\nconst chart = [\r\n    {car: \"MB\", capacity: 5},\r\n    {car: \"Audi\", capacity: 3},\r\n    {car: \"BMW\", capacity: 4},\r\n    {car: \"Dodge\", capacity: 8},\r\n    {car: \"Datsun\", capacity: 1}\r\n]\r\n\r\nconst cart = [\r\n    {\r\n        name: 'Magic beans',\r\n        price: 50\r\n    },\r\n    {\r\n        name: 'Broken Sword of dumbass',\r\n        price: 1\r\n    },\r\n    {\r\n        name: 'Justice fork',\r\n        price: 150\r\n    }\r\n];\r\n\r\nconst CheckCart = ( cart, address, phone ) => {\r\n    if (!address || !phone){\r\n        throw new Error(\"Invalid information\")\r\n    }\r\n\r\n    let sum = 0;\r\n    let delivery = 50\r\n    cart.map(item =>{\r\n        sum = sum+item.price\r\n    });\r\n\r\n    if (sum >= 2000) {\r\n        console.log(`Стоимость заказа = ${sum}, скидка 10%`);\r\n        return sum = sum * 0.1;\r\n    }\r\n\r\n    if (sum >= 1500) {\r\n        console.log(`Стоимость заказа = ${sum}, скидка 5%`);\r\n        return sum = sum * 0.05;\r\n    }\r\n\r\n    if (sum >= 1000) {\r\n        console.log(`Стоимость заказа = ${sum}, доставка бесплатно`);\r\n        return sum\r\n    } else {\r\n        console.log(`Стоимость заказа = ${sum} + доставка (${delivery})`);\r\n        return sum = sum + delivery;\r\n    }\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/script/testobj.js?");

/***/ })

/******/ });