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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar h1 = document.createElement('h1');\nh1.textContent = 'Try to win!';\ndocument.body.append(h1);\nvar field = document.createElement('div');\nfield.className = 'field';\ndocument.body.append(field);\nvar cellSize = 80;\nvar empty = {\n  value: 0,\n  top: 0,\n  left: 0\n};\nvar cells = [];\ncells.push(empty);\nvar menu = document.createElement('div');\nmenu.className = 'menu';\ndocument.body.appendChild(menu);\nvar buttonNewGame = document.createElement('button');\nbuttonNewGame.className = 'button';\nbuttonNewGame.textContent = 'new game';\nmenu.appendChild(buttonNewGame);\nbuttonNewGame.addEventListener('click', function () {\n  document.location.reload();\n});\nvar moves = document.createElement('div');\nmoves.classList = 'moves';\nmoves.textContent = 'moves: 0';\nmenu.appendChild(moves);\nvar numbersMoves = 0;\n\nfunction move(index) {\n  var cell = cells[index];\n  var leftDiff = Math.abs(empty.left - cell.left);\n  var topDiff = Math.abs(empty.top - cell.top);\n\n  if (leftDiff + topDiff > 1) {\n    return;\n  }\n\n  numbersMoves += 1;\n  moves.textContent = \"moves: \".concat(numbersMoves);\n  cell.element.style.left = \"\".concat(empty.left * cellSize, \"px\");\n  cell.element.style.top = \"\".concat(empty.top * cellSize, \"px\");\n  var emptyLeft = empty.left;\n  var emptyTop = empty.top;\n  empty.left = cell.left;\n  empty.top = cell.top;\n  cell.left = emptyLeft;\n  cell.top = emptyTop;\n  var isFinished = cells.every(function (cell) {\n    return cell.value === cell.top * 4 + cell.left;\n  });\n\n  if (isFinished) {\n    document.getElementById('congratulation').style.display = 'block';\n    var winner = document.createElement('h2');\n    winner.textContent = 'Congratulation!!';\n    field.before(winner);\n    h1.remove();\n  }\n}\n\nfunction game() {\n  var numbers = _toConsumableArray(Array(15).keys());\n\n  numbers.sort(function () {\n    return Math.random() - 0.5;\n  });\n\n  var _loop = function _loop(i) {\n    var cell = document.createElement('div');\n    var value = numbers[i - 1] + 1;\n    cell.className = 'cell';\n    cell.innerHTML = value;\n    var left = i % 4;\n    var top = (i - left) / 4;\n    cells.push({\n      value: value,\n      left: left,\n      top: top,\n      element: cell\n    });\n    cell.style.left = \"\".concat(left * cellSize, \"px\");\n    cell.style.top = \"\".concat(top * cellSize, \"px\");\n    field.appendChild(cell);\n    cell.addEventListener('click', function () {\n      move(i);\n    });\n    setTimeout(function () {\n      field.removeChild(cell);\n    }, 300000);\n  };\n\n  for (var i = 1; i <= 15; i += 1) {\n    _loop(i);\n  }\n\n  localStorage.setItem('storage', JSON.stringify(numbers));\n  numbers = JSON.parse(localStorage.getItem('storage'));\n}\n\ngame();\n\nfunction autoGame() {\n  var numbers = _toConsumableArray(Array(15).keys());\n\n  for (var i = 1; i <= 15; i += 1) {\n    var cell = document.createElement('div');\n    var value = numbers[i - 1] + 1;\n    cell.className = 'cell';\n    cell.innerHTML = value;\n    var left = i % 4;\n    var top = (i - left) / 4;\n    cells.push({\n      value: value,\n      left: left,\n      top: top,\n      element: cell\n    });\n    cell.style.left = \"\".concat(left * cellSize, \"px\");\n    cell.style.top = \"\".concat(top * cellSize, \"px\");\n    field.appendChild(cell);\n  }\n}\n\nvar timeOver = document.createElement('h3');\nvar time = document.createElement('div');\ntime.className = 'time';\nvar seconds = 300;\n\nfunction setTime() {\n  var min = parseInt(seconds / 60 % 60, 10);\n  var sec = parseInt(seconds % 60, 10);\n  time.textContent = \"Game time: \".concat(min, \":\").concat(sec);\n  seconds -= 1;\n  setTimeout(setTime, 1000);\n\n  if (seconds === 0) {\n    autoGame();\n    timeOver.textContent = 'Time over! Try one more time. Good luck!';\n    h1.remove();\n    time.remove();\n  }\n}\n\nfield.before(time);\nfield.before(timeOver);\nsetTime();\n\n//# sourceURL=webpack://game_15/./src/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://game_15/./src/scss/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;