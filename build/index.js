/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Search.js":
/*!*******************************!*\
  !*** ./src/modules/Search.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Search": function() { return /* binding */ Search; }
/* harmony export */ });
class Search {
  constructor() {
    this.searchModal = document.querySelector('.search_wrapper');
    this.searchIcon = document.querySelector('.dashicons-search');
    this.searchInput = this.searchModal.querySelector('input');
    this.closeIcon = document.querySelector('.close-icon');
    this.searchResults = document.querySelector('.results');
    this.events();
  }
  events() {
    this.searchIcon.addEventListener('click', this.openSearchModal.bind(this));
    window.addEventListener('keydown', e => {
      if (this.searchModal.classList.contains('show')) {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.closeSearchModal();
          this.displayResults();
        }
        if (e.key === 'Escape') {
          this.closeSearchModal();
        }
      }
    });
    this.searchModal.addEventListener('click', e => {
      if (e.target.tagName !== 'INPUT' || e.target.classList.contains('close-icon')) {
        this.closeSearchModal();
      }
    });
  }
  openSearchModal() {
    this.searchModal.classList.add('show');
    this.searchInput.focus();
  }
  closeSearchModal() {
    this.searchModal.classList.remove('show');
    this.searchInput.value = '';
  }
  displayResults() {}
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
/* harmony import */ var _modules_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Search */ "./src/modules/Search.js");


const search = new _modules_Search__WEBPACK_IMPORTED_MODULE_1__.Search();
(0,_modules_navbarScroll__WEBPACK_IMPORTED_MODULE_0__.hideNavbar)();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map