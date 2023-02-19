/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Carousel.js":
/*!*********************************!*\
  !*** ./src/modules/Carousel.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class Slider {
  constructor() {
    if (document.querySelector('.product-slider')) {
      this.slides = document.querySelectorAll('.product-slide');
      this.events();
    }
  }
  events() {
    let curSlide = 0;
    let maxSlide = this.slides.length - 1;
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    nextBtn.addEventListener('click', () => {
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      this.slides.forEach(slide => {
        slide.style.transform = `translateX(${100 * -curSlide}%)`;
      });
    });
    prevBtn.addEventListener('click', () => {
      if (curSlide === 0) {
        curSlide = maxSlide;
      } else {
        curSlide--;
      }
      this.slides.forEach(slide => {
        slide.style.transform = `translateX(${-100 * curSlide}%)`;
      });
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/modules/navbarScroll.js":
/*!*************************************!*\
  !*** ./src/modules/navbarScroll.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideNavbar": function() { return /* binding */ hideNavbar; }
/* harmony export */ });
function hideNavbar() {
  let previousScroll = 0;
  const header = document.querySelector('header');
  const headerHeight = header.clientHeight;
  window.addEventListener('scroll', () => {
    if (window.innerWidth >= 992) {
      let currentScroll = window.scrollY;
      if (currentScroll > previousScroll && currentScroll > headerHeight) {
        header.classList.add('hide');
      } else {
        header.classList.remove('hide');
      }
      previousScroll = currentScroll;
    }
  });
}

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_navbarScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbarScroll */ "./src/modules/navbarScroll.js");
/* harmony import */ var _modules_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Carousel */ "./src/modules/Carousel.js");


(0,_modules_navbarScroll__WEBPACK_IMPORTED_MODULE_0__.hideNavbar)();
const slider = new _modules_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"]();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map