/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/MobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/MobileMenu.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class MobileMenu {
  constructor() {
    this.mobileMenu = document.querySelector('.menu_wrapper');
    this.hamburger = document.querySelector('.hamburger');
    this.dropdownIcon = document.querySelector('.menu').querySelector('.dashicons-arrow-down');
    this.dropdownMenu = document.querySelector('.sub-menu');
    this.mediaQueryMatch = window.matchMedia('(max-width: 768px)');
    this.events();
  }
  events() {
    // Toggle mobile menu
    this.hamburger.addEventListener('click', () => {
      this.mobileMenu.classList.toggle('open');
      this.hamburger.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    // Toggle dropdown menu
    if (this.mediaQueryMatch.matches) {
      this.dropdownIcon.addEventListener('click', e => {
        e.preventDefault();
        this.dropdownMenu.classList.toggle('open');
      });
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./src/modules/animationOnScroll.js":
/*!******************************************!*\
  !*** ./src/modules/animationOnScroll.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationOnScroll": function() { return /* binding */ animationOnScroll; }
/* harmony export */ });
function animationOnScroll() {
  const elements = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('fade-in', entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  }, {
    treshold: 0.7
  });
  [...elements].forEach(el => {
    observer.observe(el);
  });
}

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
  const header = document.querySelector('.site_header');
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
/* harmony import */ var _modules_animationOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animationOnScroll */ "./src/modules/animationOnScroll.js");
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/MobileMenu */ "./src/modules/MobileMenu.js");



(0,_modules_navbarScroll__WEBPACK_IMPORTED_MODULE_0__.hideNavbar)();
(0,_modules_animationOnScroll__WEBPACK_IMPORTED_MODULE_1__.animationOnScroll)();
const mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_2__["default"]();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map