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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _pics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pics */ \"./src/pics.js\");\n\n\nclass Board {\n\n  constructor(dimensions, canvas, ctx, canvasA, ctxA) {\n    this.dimensions = dimensions;\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.ctxA = ctxA;\n    this.canvasA = canvasA;\n    this.selected = 0;\n    this.healthPts = 100;\n    this.onCanvasClick = this.onCanvasClick.bind(this);\n    this.imageObjToBeDrawn = [];\n    this.animationToBeDrawn = [];\n    this.pics = new _pics__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dimensions, canvasA, ctxA)\n\n    this.draw = this.draw.bind(this);\n    this.addImgObj = this.addImgObj.bind(this);\n    this.karenImg = this.pics.karenImage();\n    this.bobImg = this.pics.bobImage();\n    this.sanitizerImg = this.pics.sanitizerImage();\n    this.newspaperImg = this.pics.newspaperImage();\n    this.nurseImg = this.pics.nurseImage();\n\n    // this.nurseImg2 = new Image();\n    // this.nurseImg2.src = \"../assets/nurse_sprite.png\";\n\n    window.addEventListener('load', this.addImgObj)\n  }\n\n  drawBackground() {\n    this.drawNavbar();\n    this.makeRects();\n  }\n\n  makeRects() {\n\n    // ADD HOVER EFFECT \n\n    let placeRects = [], i = 0, r;\n    let that = this; \n\n    let xi = 238;\n    let yi = 137;\n\n    for(let j = 0; j < 5; j++) {\n      for(let jj = 0; jj < 9; jj++) {\n        placeRects.push({x: xi, y: yi, w: 96, h: 100})\n        xi += 101;\n      }\n      yi += 105;\n      xi = 238;\n    }\n\n    while(r = placeRects[i++]) that.ctx.rect(r.x, r.y, r.w, r.h);\n    that.ctx.fillStyle = \"transparent\"; that.ctx.fill();\n\n    that.canvas.onmousemove = function(e) {\n\n      let rect = this.getBoundingClientRect(),\n        x = e.clientX - rect.left,\n        y = e.clientY - rect.top,\n        i = 0, r;\n\n      that.ctx.clearRect(130, 130, that.canvas.width, that.canvas.height);\n\n      while(r = placeRects[i++]) {\n        that.ctx.beginPath();\n        that.ctx.rect(r.x, r.y, r.w, r.h);\n\n        that.ctx.fillStyle = that.ctx.isPointInPath(x, y) ? \"rgba(255, 255, 255, 0.1)\" : \"transparent\";\n        that.ctx.fill();\n      }\n\n    }\n  }\n\n  drawNavbar() {\n\n    //DRAW NAVBAR\n\n    this.ctx.clearRect(0, 0, 950, 130);\n\n    if (this.selected === 0) {\n      this.ctx.fillStyle = \"red\";\n      this.ctx.fillRect(10, 10, 100, 105);\n      this.ctx.fillStyle = \"#dbd49f\";\n      this.ctx.fillRect(120, 10, 100, 105);\n      this.ctx.fillRect(230, 10, 100, 105);\n      this.ctx.fillRect(340, 10, 100, 105);\n    } else if (this.selected === 1) {\n      this.ctx.fillStyle = \"red\";\n      this.ctx.fillRect(120, 10, 100, 105);\n      this.ctx.fillStyle = \"#dbd49f\";\n      this.ctx.fillRect(10, 10, 100, 105);\n      this.ctx.fillRect(230, 10, 100, 105);\n      this.ctx.fillRect(340, 10, 100, 105);\n    } else if (this.selected === 2) {\n      this.ctx.fillStyle = \"red\";\n      this.ctx.fillRect(230, 10, 100, 105);\n      this.ctx.fillStyle = \"#dbd49f\";\n      this.ctx.fillRect(10, 10, 100, 105);\n      this.ctx.fillRect(120, 10, 100, 105);\n      this.ctx.fillRect(340, 10, 100, 105);\n    } else if (this.selected === 3) {\n      this.ctx.fillStyle = \"red\";\n      this.ctx.fillRect(340, 10, 100, 105);\n      this.ctx.fillStyle = \"#dbd49f\";\n      this.ctx.fillRect(10, 10, 100, 105);\n      this.ctx.fillRect(120, 10, 100, 105);\n      this.ctx.fillRect(230, 10, 100, 105);\n    }\n\n    this.ctx.fillStyle = \"#303030\";\n    this.ctx.fillRect(11, 11, 98, 103);\n    this.ctx.fillRect(121, 11, 98, 103);\n    this.ctx.fillRect(231, 11, 98, 103);\n    this.ctx.fillRect(341, 11, 98, 103);\n\n    let that = this;\n\n    let nurseImg = new Image();\n    nurseImg.addEventListener(\"load\", function () {\n      that.ctx.drawImage(nurseImg, 40, 13, 40, 40 * nurseImg.height / nurseImg.width);\n    })\n    nurseImg.src = \"./assets/nurse_sprite.png\";\n\n    // that.ctx.drawImage(this.nurseImg2, 40, 13, 40, 40 * this.nurseImg2.height / this.nurseImg2.width);\n    \n    let scientistImg = new Image();\n    scientistImg.addEventListener(\"load\", function () {\n      that.ctx.drawImage(scientistImg, 265, 13, 32, 32 * scientistImg.height / scientistImg.width);\n    })\n    scientistImg.src = \"./assets/scientist_sprite.png\";\n    \n    let newsImg = new Image();\n    newsImg.addEventListener(\"load\", function () {\n      that.ctx.drawImage(newsImg, 125, 20, 105, 105 * newsImg.height / newsImg.width);\n    })\n    newsImg.src = \"./assets/newspaper.png\";\n\n    let sanImg = new Image();\n    sanImg.addEventListener(\"load\", function () {\n      that.ctx.drawImage(sanImg, 345, 13, 95, 95 * sanImg.height / sanImg.width);\n    })\n    sanImg.src = \"./assets/sanitizer.png\";\n\n    this.ctx.setTransform(1, 0, 0, 1, 0, 0);\n    this.ctx.fillStyle = \"#dbd49f\";\n    this.ctx.font = \"50px Arial\";\n    this.ctx.scale(1, 1.5);\n    this.ctx.fillText(`${this.healthPts}`, 450, 55)\n    this.ctx.setTransform(1, 0, 0, 1, 0, 0);\n    this.ctx.font = \"20px Arial\";\n    this.ctx.fillText(\"HEALTH\", 453, 105);\n\n    this.addStopBoxes();\n    that.canvas.onclick = that.onCanvasClick;\n  }\n\n  onCanvasClick(e) {\n\n    let placeRects = [\n      { x: 10, y: 10, w: 100, h: 105 },\n      { x: 120, y: 10, w: 100, h: 105 },\n      { x: 230, y: 10, w: 100, h: 105 },\n      { x: 340, y: 10, w: 100, h: 105 }\n    ]\n\n    let rect = this.canvas.getBoundingClientRect(),\n      x = e.clientX - rect.left,\n      y = e.clientY - rect.top,\n      i = 0, r;\n\n    this.ctx.clearRect(0, 0, 950, 130);\n\n    while (r = placeRects[i++]) {\n      this.ctx.beginPath();\n      this.ctx.rect(r.x, r.y, r.w, r.h);\n      this.selected = this.ctx.isPointInPath(x, y) ? (i - 1) : this.selected;\n    }\n\n    this.drawNavbar();\n\n    // PLACE THINGS ON BOARD\n\n    let placeRects2 = [];\n\n    i = 0;\n\n    let xi = 238;\n    let yi = 137;\n\n    for (let j = 0; j < 5; j++) {\n      for (let jj = 0; jj < 9; jj++) {\n        placeRects2.push({ x: xi, y: yi, w: 96, h: 100 })\n        xi += 101;\n      }\n      yi += 105;\n      xi = 238;\n    }\n\n    while (r = placeRects2[i++]) this.ctxA.rect(r.x, r.y, r.w, r.h);\n    this.ctxA.fillStyle = \"transparent\"; this.ctxA.fill();\n\n    let rect2 = this.canvas.getBoundingClientRect();\n    x = e.clientX - rect2.left;\n    y = e.clientY - rect2.top;\n\n    i = 0;\n\n    while (r = placeRects2[i++]) {\n      this.ctxA.beginPath();\n      this.ctxA.rect(r.x, r.y, r.w, r.h);\n\n      if (this.ctxA.isPointInPath(x, y)) {\n        if (this.selected === 0) {\n          if (this.healthPts > 49) {\n            this.animationToBeDrawn.push({ image: this.nurseImg, shift: 0, frameWidth: 84, frameHeight: 177, totalFrames: 21, currentFrame: 0, fps: 5, fpsInterval: 200, xi: r.x, yi: r.y - 85, type: \"animation\", moving: false})\n            this.healthPts -= 50;\n          }\n          this.ctx.clearRect(0, 0, 950, 130);\n          this.drawNavbar();\n        } else if (this.selected === 1) {\n          if (this.healthPts > 74) {\n            this.imageObjToBeDrawn.push({ image: this.newspaperImg, frameWidth: 734, frameHeight: 656, posX: r.x - 5, posY: r.y-7, scaleWidth: 120, scaleHeight: 120 * 656/734 })\n            this.healthPts -= 75;\n          }\n          this.ctx.clearRect(0, 0, 950, 130);\n          this.drawNavbar();\n        } else if (this.selected === 2) {\n          if (this.healthPts > 49) {\n            this.imageObjToBeDrawn.push({ image: this.sanitizerImg, frameWidth: 400, frameHeight: 421, posX: r.x - 10, posY: r.y - 25, scaleWidth: 120, scaleHeight: 120 * 421/400 })\n            this.healthPts -= 50;\n          }\n          this.ctx.clearRect(0, 0, 950, 130);\n          this.drawNavbar();\n        } else if (this.selected === 3) {\n          if (this.healthPts > 99) {\n            this.imageObjToBeDrawn.push({ image: this.sanitizerImg, frameWidth: 400, frameHeight: 421, posX: r.x - 10, posY: r.y - 25, scaleWidth: 120, scaleHeight: 120 * 421/400 })\n            this.healthPts -= 100;\n          }\n          this.ctx.clearRect(0, 0, 950, 130);\n          this.drawNavbar();\n        }\n      }\n    }\n\n  }\n\n  addStopBoxes() {\n    if (this.healthPts < 50) {\n      this.ctx.fillStyle = \"rgba(0, 0, 0, 0.5)\";\n      this.ctx.fillRect(10, 10, 100, 105);\n      this.ctx.fillRect(120, 10, 100, 105);\n      this.ctx.fillRect(230, 10, 100, 105);\n      this.ctx.fillRect(340, 10, 100, 105);\n    } else if (this.healthPts < 75) {\n      this.ctx.fillStyle = \"rgba(0, 0, 0, 0.5)\";\n      // this.ctx.fillRect(10, 10, 100, 105);\n      this.ctx.fillRect(120, 10, 100, 105);\n      this.ctx.fillRect(230, 10, 100, 105);\n      this.ctx.fillRect(340, 10, 100, 105);\n    } else if (this.healthpts < 100) {\n      this.ctx.fillStyle = \"rgba(0, 0, 0, 0.5)\";\n      // this.ctx.fillRect(10, 10, 100, 105);\n      // this.ctx.fillRect(120, 10, 100, 105);\n      // this.ctx.fillRect(230, 10, 100, 105);\n      this.ctx.fillRect(340, 10, 100, 105);\n    }\n  }\n\n  addImgObj(e) {\n    this.fps = 5;\n    this.fpsInterval = 1000 / this.fps;\n    this.then = Date.now();\n    this.startTime = this.then;\n    this.animationToBeDrawn.push({ image: this.karenImg, shift: 0, frameWidth: 86, frameHeight: 176, totalFrames: 8, currentFrame: 0,\n    fps: 5, fpsInterval: 200, xi: 950, yi: 50, type: \"animation\", moving: true });\n    this.draw();\n  }\n\n  draw() {\n\n    window.requestAnimationFrame(this.draw);\n\n    let now = Date.now();\n    let elapsed = now - this.then;\n    let that = this;\n\n    if (elapsed > that.fpsInterval) {\n      that.then = now - (elapsed % that.fpsInterval);\n\n      that.ctxA.clearRect(0, 0, that.canvas.width, that.canvas.height);\n      let imageObj;\n\n      for(let j = 0; j < that.imageObjToBeDrawn.length; j++) {\n        imageObj = that.imageObjToBeDrawn[j];\n        that.ctxA.drawImage(imageObj.image, 0, 0, imageObj.frameWidth, imageObj.frameHeight, imageObj.posX, imageObj.posY, imageObj.scaleWidth, imageObj.scaleHeight)\n      }\n\n      for (let jj = 0; jj < that.animationToBeDrawn.length; jj++) {\n        imageObj = that.animationToBeDrawn[jj];\n\n        that.ctxA.drawImage(imageObj.image, imageObj.shift, 0, imageObj.frameWidth, imageObj.frameHeight, imageObj.xi, imageObj.yi, imageObj.frameWidth, imageObj.frameHeight)\n        imageObj.shift += imageObj.frameWidth + 1;\n\n        if (imageObj.moving) {\n          imageObj.xi -= 4;\n        }\n\n        if (imageObj.currentFrame == imageObj.totalFrames) {\n          imageObj.shift = 0;\n          imageObj.currentFrame = 0;\n        }\n\n        imageObj.currentFrame++;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StoreDefense; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\n\nclass StoreDefense {\n\n  constructor(canvas, canvas2) {\n    this.canvas = canvas;\n    this.canvas2 = canvas2;\n    \n    // Entry Screen\n    this.entryModal = document.getElementById(\"entry-modal\");\n    this.entryModalFirst = document.getElementById(\"entry-modal-first\");\n    this.setModalDiv = this.setModalDiv.bind(this);\n    this.entryModal.onclick = this.setModalDiv;\n    \n    // Sound \n    this.audio = document.getElementById(\"audio\");\n    this.soundIcon = document.getElementById(\"sound-icon\");\n    this.soundOn = true;\n    \n    this.renderSound();\n    this.setVolume = this.setVolume.bind(this);\n    this.soundIcon.onclick = this.setVolume;\n\n    canvas.height = 665;\n    canvas.width = 1150;\n    canvas2.height = 665;\n    canvas2.width = 1150;\n\n    // Set Context and Restart Game\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.ctx = canvas.getContext(\"2d\");\n    this.ctx2 = canvas2.getContext(\"2d\");\n    this.restart();\n  }\n\n  restart() {\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions, this.canvas2, this.ctx2, this.canvas, this.ctx);\n    this.board.drawBackground();\n  }\n\n  setModalDiv() {\n    let that = this;\n    // this.restart();\n\n    that.entryModalFirst.style.opacity = '0';\n    setTimeout(function () { \n      that.entryModalFirst.remove(); \n      that.entryModal.style.opacity = '0';\n      setTimeout(function () {\n        that.entryModal.remove();\n      }, 1000);\n    }, 1000);\n\n    this.audio.muted = false;\n    this.audio.volume = 0.1;\n    // this.audio.play();\n  }\n\n  renderSound() {\n    let template;\n    if (this.soundOn === true) {\n      template = '<i class=\"fas fa-volume-up\"></i>'\n    } else {\n      template = '<i class=\"fas fa-volume-off\"></i>'\n    }\n    this.soundIcon.innerHTML = template;\n  }\n\n  setVolume() {\n    if (this.soundOn) {\n      this.soundOn = false;\n      this.renderSound();\n      this.audio.muted = true;\n    } else {\n      this.soundOn = true;\n      this.renderSound();\n      // this.audio.muted = false;\n      this.audio.volume = 0.1;\n      this.audio.play();\n    }\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('defense-game');\nconsole.log(canvas);\nconst canvas2 = document.getElementById('background-hover-canvas');\n\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, canvas2);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pics.js":
/*!*********************!*\
  !*** ./src/pics.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pics; });\nclass Pics {\n\n  constructor(dimensions, canvas, ctx) {\n    this.dimensions = dimensions;\n    this.canvas = canvas;\n    this.ctx = ctx;\n  }\n\n  karenImage() {\n    this.karen = new Image();\n    this.karen.src = \"./assets/karen_spritesheet3.png\";\n    return this.karen;\n  }\n\n  bobImage() {\n    this.bob = new Image();\n    this.bob.src = \"./assets/bob_spritesheet.png\";\n    return this.bob;\n  }\n\n  sanitizerImage() {\n    this.sanitizer = new Image();\n    this.sanitizer.src = \"./assets/sanitizer.png\";\n    return this.sanitizer;\n  }\n\n  newspaperImage() {\n    this.newspaper = new Image();\n    this.newspaper.src = \"./assets/newspaper.png\";\n    return this.newspaper;\n  }\n\n  nurseImage() {\n    this.nurse = new Image();\n    this.nurse.src = \"./assets/nurse_spritesheet3.png\";\n    return this.nurse;\n  }\n\n  nurseImage2() {\n    this.nurse2 = new Image();\n    this.nurse2.src = \"./assets/nurse_sprite.png\";\n    return this.nurse2;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pics.js?");

/***/ })

/******/ });