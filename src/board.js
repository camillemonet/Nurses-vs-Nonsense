import Pics from "./pics";
import Baddies from "./baddies";

export default class Board {

  constructor(dimensions, canvas, ctx, canvasA, ctxA, canvas3, ctx3) {
    this.dimensions = dimensions;
    this.ctx = ctx;
    this.canvas = canvas;
    this.ctxA = ctxA;
    this.canvasA = canvasA;
    this.selected = 0;
    this.healthPts = 100;
    this.onCanvasClick = this.onCanvasClick.bind(this);
    this.imageObjToBeDrawn = [];
    this.animationToBeDrawn = [];
    this.pics = new Pics(dimensions, canvasA, ctxA)

    this.draw = this.draw.bind(this);
    this.addImgObj = this.addImgObj.bind(this);

    this.karenImg = this.pics.karenImage();
    this.bobImg = this.pics.bobImage();
    this.sanitizerImg = this.pics.sanitizerImage();
    this.newspaperImg = this.pics.newspaperImage();
    this.nurseImg = this.pics.nurseImage();
    this.maskImg = this.pics.mask();
    this.scientistImg = this.pics.scientistImage();
    this.plusImg = this.pics.plus();

    this.scientistRepeat = 0;

    this.gameState = "in progress";

    this.addImgObj();
  }

  drawBackground() {
    this.drawNavbar();
    this.makeRects();
  }

  makeRects() {

    // ADD HOVER EFFECT 

    let placeRects = [], i = 0, r;
    let that = this; 

    let xi = 238;
    let yi = 137;

    for(let j = 0; j < 5; j++) {
      for(let jj = 0; jj < 9; jj++) {
        placeRects.push({x: xi, y: yi, w: 96, h: 100})
        xi += 101;
      }
      yi += 105;
      xi = 238;
    }

    while(r = placeRects[i++]) that.ctx.rect(r.x, r.y, r.w, r.h);
    that.ctx.fillStyle = "transparent"; that.ctx.fill();

    that.canvas.onmousemove = function(e) {

      let rect = this.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top,
        i = 0, r;

      that.ctx.clearRect(130, 130, that.canvas.width, that.canvas.height);

      while(r = placeRects[i++]) {
        that.ctx.beginPath();
        that.ctx.rect(r.x, r.y, r.w, r.h);

        that.ctx.fillStyle = that.ctx.isPointInPath(x, y) ? "rgba(255, 255, 255, 0.1)" : "transparent";
        that.ctx.fill();
      }

    }
  }

  drawNavbar() {

    //DRAW NAVBAR

    this.ctx.clearRect(0, 0, 950, 130);

    if (this.selected === 0) {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(10, 10, 100, 105);
      // this.ctx.fillStyle = "#dbd49f";
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(120, 10, 100, 105);
      this.ctx.fillRect(230, 10, 100, 105);
      this.ctx.fillRect(340, 10, 100, 105);
    } else if (this.selected === 1) {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(120, 10, 100, 105);
      // this.ctx.fillStyle = "#dbd49f";
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(10, 10, 100, 105);
      this.ctx.fillRect(230, 10, 100, 105);
      this.ctx.fillRect(340, 10, 100, 105);
    } else if (this.selected === 2) {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(230, 10, 100, 105);
      // this.ctx.fillStyle = "#dbd49f";
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(10, 10, 100, 105);
      this.ctx.fillRect(120, 10, 100, 105);
      this.ctx.fillRect(340, 10, 100, 105);
    } else if (this.selected === 3) {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(340, 10, 100, 105);
      // this.ctx.fillStyle = "#dbd49f";
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(10, 10, 100, 105);
      this.ctx.fillRect(120, 10, 100, 105);
      this.ctx.fillRect(230, 10, 100, 105);
    }

    this.ctx.fillStyle = "#303030";
    this.ctx.fillRect(11, 11, 98, 103);
    this.ctx.fillRect(121, 11, 98, 103);
    this.ctx.fillRect(231, 11, 98, 103);
    this.ctx.fillRect(341, 11, 98, 103);

    let that = this;

    let nurseImg = new Image();
    nurseImg.addEventListener("load", function () {
      that.ctx.drawImage(nurseImg, 40, 13, 40, 40 * nurseImg.height / nurseImg.width);
    })
    nurseImg.src = "./assets/nurse_sprite.png";
    
    let scientistImg = new Image();
    scientistImg.addEventListener("load", function () {
      that.ctx.drawImage(scientistImg, 265, 13, 32, 32 * scientistImg.height / scientistImg.width);
    })
    scientistImg.src = "./assets/scientist_sprite.png";
    
    let newsImg = new Image();
    newsImg.addEventListener("load", function () {
      that.ctx.drawImage(newsImg, 125, 20, 105, 105 * newsImg.height / newsImg.width);
    })
    newsImg.src = "./assets/newspaper.png";

    let sanImg = new Image();
    sanImg.addEventListener("load", function () {
      that.ctx.drawImage(sanImg, 345, 13, 95, 95 * sanImg.height / sanImg.width);
    })
    sanImg.src = "./assets/sanitizer.png";

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    // this.ctx.fillStyle = "#dbd49f";
    this.ctx.fillStyle = "white";
    this.ctx.font = "50px Arial";
    this.ctx.scale(1, 1.5);
    this.ctx.fillText(`${this.healthPts}`, 450, 55)
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.font = "20px Arial";
    this.ctx.fillText("HEALTH", 453, 105);

    this.addStopBoxes();
    that.canvas.onclick = that.onCanvasClick;
  }

  onCanvasClick(e) {

    let placeRects = [
      { x: 10, y: 10, w: 100, h: 105 },
      { x: 120, y: 10, w: 100, h: 105 },
      { x: 230, y: 10, w: 100, h: 105 },
      { x: 340, y: 10, w: 100, h: 105 }
    ]

    let rect = this.canvas.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top,
      i = 0, r;

    this.ctx.clearRect(0, 0, 950, 130);

    while (r = placeRects[i++]) {
      this.ctx.beginPath();
      this.ctx.rect(r.x, r.y, r.w, r.h);
      this.selected = this.ctx.isPointInPath(x, y) ? (i - 1) : this.selected;
    }

    this.drawNavbar();

    // PLACE THINGS ON BOARD

    let placeRects2 = [];

    i = 0;

    let xi = 238;
    let yi = 137;

    for (let j = 0; j < 5; j++) {
      for (let jj = 0; jj < 9; jj++) {
        placeRects2.push({ x: xi, y: yi, w: 96, h: 100 })
        xi += 101;
      }
      yi += 105;
      xi = 238;
    }

    while (r = placeRects2[i++]) this.ctxA.rect(r.x, r.y, r.w, r.h);
    this.ctxA.fillStyle = "transparent"; this.ctxA.fill();

    let rect2 = this.canvas.getBoundingClientRect();
    x = e.clientX - rect2.left;
    y = e.clientY - rect2.top;

    i = 0;

    while (r = placeRects2[i++]) {
      this.ctxA.beginPath();
      this.ctxA.rect(r.x, r.y, r.w, r.h);

      if (this.ctxA.isPointInPath(x, y)) {
        if (this.selected === 0) {
          if (this.healthPts > 74 && this.animationToBeDrawn.filter(ele => {return (ele.square === undefined ? false : (ele.square[0] === r.x && ele.square[1] === r.y)) }).length === 0 && this.imageObjToBeDrawn.filter(ele => { return (ele.square[0] === r.x && ele.square[1] === r.y) }).length === 0) {
            this.animationToBeDrawn.push({ image: this.nurseImg, shift: 0, frameWidth: 69, frameHeight: 150, totalFrames: 7, currentFrame: 2, fps: 5, 
              fpsInterval: 200, xi: r.x + 10, yi: r.y - 60, type: "animation", item: "nurse", active: true, damage: 0, frameCt: 0, square: [r.x, r.y] })
            this.healthPts -= 75;
          }
          this.ctx.clearRect(0, 0, 950, 130);
          this.drawNavbar();
        } else if (this.selected === 1 && this.animationToBeDrawn.filter(ele => {return (ele.square === undefined ? false : (ele.square[0] === r.x && ele.square[1] === r.y)) }).length === 0 && this.imageObjToBeDrawn.filter(ele => { return (ele.square[0] === r.x && ele.square[1] === r.y) }).length === 0) {
          if (this.healthPts > 74) {
            this.imageObjToBeDrawn.push({ image: this.newspaperImg, frameWidth: 734, frameHeight: 656, posX: r.x - 5, posY: r.y-7, scaleWidth: 120, 
              scaleHeight: 120 * 656/734, active: true, item: "newspaper", damage: 0, square: [r.x, r.y] })
            this.healthPts -= 75;
          }
          this.ctx.clearRect(0, 0, 950, 130);
          this.drawNavbar();
        } else if (this.selected === 2 && this.animationToBeDrawn.filter(ele => {return (ele.square === undefined ? false : (ele.square[0] === r.x && ele.square[1] === r.y)) }).length === 0 && this.imageObjToBeDrawn.filter(ele => { return (ele.square[0] === r.x && ele.square[1] === r.y) }).length === 0) {
          if (this.healthPts > 99) {
            this.animationToBeDrawn.push({ image: this.scientistImg, shift: 0, frameWidth: 51, frameHeight: 150, totalFrames: 2, currentFrame: 0, fps: 5,
              fpsInterval: 200, xi: r.x + 20, yi: r.y - 55, type: "animation", item: "scientist", active: true, healthTime: Date.now(), firstPass: true, square: [r.x, r.y] })
            this.healthPts -= 100;
          }
          this.ctx.clearRect(0, 0, 950, 130);
          this.drawNavbar();
        } else if (this.selected === 3 && this.animationToBeDrawn.filter(ele => {return (ele.square === undefined ? false : (ele.square[0] === r.x && ele.square[1] === r.y)) }).length === 0 && this.imageObjToBeDrawn.filter(ele => {return (ele.square[0] === r.x && ele.square[1] === r.y)}).length === 0) {
          if (this.healthPts > 49) {
            this.imageObjToBeDrawn.push({ image: this.sanitizerImg, frameWidth: 400, frameHeight: 421, posX: r.x - 10, posY: r.y - 25, scaleWidth: 120,
              scaleHeight: 120 * 421/400, active: true, item: "sanitizer", square: [r.x, r.y] })
              this.healthPts -= 50;
          }
          this.ctx.clearRect(0, 0, 950, 130);
          this.drawNavbar();
        }
      }
    }

  }

  addStopBoxes() {
    if (this.healthPts < 50) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      this.ctx.fillRect(10, 10, 100, 105);
      this.ctx.fillRect(120, 10, 100, 105);
      this.ctx.fillRect(230, 10, 100, 105);
      this.ctx.fillRect(340, 10, 100, 105);
    } else if (this.healthPts < 75) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      this.ctx.fillRect(10, 10, 100, 105);
      this.ctx.fillRect(120, 10, 100, 105);
      this.ctx.fillRect(230, 10, 100, 105);
      // this.ctx.fillRect(340, 10, 100, 105);
    } else if (this.healthPts < 100) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      // this.ctx.fillRect(10, 10, 100, 105);
      // this.ctx.fillRect(120, 10, 100, 105);
      this.ctx.fillRect(230, 10, 100, 105);
      // this.ctx.fillRect(340, 10, 100, 105);
    }
  }

  addImgObj(e) {
    this.fps = 5;
    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.startTime = this.then;
    this.healthOld = Date.now();
    let baddies = new Baddies(this.dimensions, this.canvasA, this.ctxA);
    this.animationToBeDrawn = baddies.getBaddies();
    this.draw();
  }

  draw() {
    let loopId = window.requestAnimationFrame(this.draw);

    let now = Date.now();
    let elapsed = now - this.then;
    let that = this;

    if (7500 < (now - this.healthOld)) {
      this.healthPts += 25;
      this.healthOld = Date.now();
      this.drawNavbar();
    }

    if (elapsed > that.fpsInterval) {
      that.then = now - (elapsed % that.fpsInterval);

      that.ctxA.clearRect(0, 0, that.canvas.width, that.canvas.height);
      let imageObj;

      for(let j = 0; j < that.imageObjToBeDrawn.length; j++) {
        imageObj = that.imageObjToBeDrawn[j];
        if (imageObj.active) {
          that.ctxA.drawImage(imageObj.image, 0, 0, imageObj.frameWidth, imageObj.frameHeight, imageObj.posX, imageObj.posY, 
            imageObj.scaleWidth, imageObj.scaleHeight)
        }
      }

      for (let jj = 0; jj < that.animationToBeDrawn.length; jj++) {
        imageObj = that.animationToBeDrawn[jj];
        if (imageObj.active) {
          that.ctxA.drawImage(imageObj.image, imageObj.shift, 0, imageObj.frameWidth, imageObj.frameHeight, imageObj.xi,
            imageObj.yi, imageObj.frameWidth, imageObj.frameHeight)
          imageObj.shift += imageObj.frameWidth + 1;

          if (imageObj.item === "mike" || imageObj.item === "karen" || imageObj.item === "bob" || imageObj.item === "mask") {
            imageObj.xi -= imageObj.speed;
          }

          if (imageObj.item === "nurse" && imageObj.currentFrame === 4) {
            this.animationToBeDrawn.push({
              image: this.maskImg, shift: 0, frameWidth: this.maskImg.width, frameHeight: this.maskImg.height, speed: -15,
              totalFrames: 1, currentFrame: 1, type: "animation", item: "mask", xi: imageObj.xi + 75, yi: imageObj.yi + 50, active: true
            })
            imageObj.frameCt = 0;
          }

          if (imageObj.item === "nurse" && imageObj.currentFrame === 1 && imageObj.frameCt < 20) {
            imageObj.shift = 0;
            imageObj.currentFrame = 0;
            imageObj.frameCt += 1;
          }

          if (imageObj.item === "scientist" && imageObj.currentFrame === 2 && this.scientistRepeat < 20) {
            imageObj.shift = 51;
            imageObj.currentFrame = 1;
            this.scientistRepeat += 1;
          }

          if (imageObj.item === "scientist" && this.scientistRepeat > 19 && this.scientistRepeat < 30) {
            imageObj.shift = 0;
            imageObj.currentFrame = 0;
            this.scientistRepeat += 1;
          }

          if (imageObj.item === "scientist" && this.scientistRepeat === 30) {
            this.scientistRepeat = 0;
            imageObj.shift = 0;
            imageObj.currentFrame = 0;
          }

          if (imageObj.item === "scientist" && (10000 < now - imageObj.healthTime)) {
            imageObj.healthTime = now;
            this.healthPts += 50;
            this.drawNavbar();
            imageObj.firstPass = false;
          }
          
          if (imageObj.item === "scientist" && (1000 > now - imageObj.healthTime)) {
            if (imageObj.firstPass === false) {
              that.ctxA.drawImage(this.plusImg, 0, 0, 30, 30, imageObj.xi + 10, imageObj.yi - 40, 30, 30)
            }
          }

          if (imageObj.item === "mask" && imageObj.xi > 1075) {
            imageObj.item = "null";
            imageObj.active = false;
          }

          if (imageObj.currentFrame == imageObj.totalFrames) {
            imageObj.shift = 0;
            imageObj.currentFrame = 0;
          }

          imageObj.currentFrame++;

          this.detectCollisions();

          if (this.gameState === "lost") {
            window.cancelAnimationFrame(loopId);
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
            this.ctx.font = "40px Righteous";
            this.ctx.fillStyle = "#ea2406";
            this.ctx.fillText("You Lost", 500, 125);
            this.ctx.fillStyle = "white";
            this.ctx.font = "20px Righteous";
            this.ctx.fillText("The shoppers made it into Cotsco.", 425, 175);
            this.ctx.fillText("The pandemic is renewed and you're stuck in your house for another six months.", 225, 205);
            this.ctx.fillText("It's time to break out the sourdough starter once more.", 320, 235);
            this.ctx.fillText("Refresh to play again.", 485, 325)
            this.canvas.onmousemove = function () { };
            this.canvas.onclick = function () { };
          }
        }
      }
    }
  }

  detectCollisions() {
    let obj1, obj2; 
    let allObjs = this.imageObjToBeDrawn.concat(this.animationToBeDrawn);

    for(let i = 0; i < allObjs.length; i++) {
      for(let j = i+1; j < allObjs.length; j++) {
        
        obj1 = allObjs[j];
        obj2 = allObjs[i];

        if(obj1.item === "mask" && obj2.item === "karen") {
          if(obj1.xi > (obj2.xi - obj2.frameWidth/2 + 10) && obj1.xi < (obj2.xi + obj2.frameWidth/2 - 10) 
          && obj1.yi < (obj2.yi + obj2.frameHeight*3/4) && obj1.yi > obj2.yi ) {
            obj1.active = false;
            obj1.item = "null";
            obj2.maskCounter += 1;
            if (obj2.maskCounter === 6) {
              obj2.item = "null";
              obj2.active = false;
            }
          }
        }

        if(obj1.item === "mask" && (obj2.item === "bob" || obj2.item === "mike")) {
          if(obj1.xi > (obj2.xi - obj2.frameWidth/2 + 10) && obj1.xi < (obj2.xi + obj2.frameWidth/2 - 10) 
          && obj1.yi < (obj2.yi + obj2.frameHeight*3/4) && obj1.yi > obj2.yi ) {
            obj1.active = false;
            obj1.item = "null";
            obj2.maskCounter += 1;
            if (obj2.maskCounter === 3) {
              obj2.item = "null";
              obj2.active = false;
            }
          }
        }

        if(obj1.item === "karen" && obj2.item === "mask") {
          if(obj2.xi > (obj1.xi - obj1.frameWidth/2 + 10) && obj2.xi < (obj1.xi + obj1.frameWidth/2 - 10) 
          && obj2.yi < (obj1.yi + obj1.frameHeight*3/4) && obj2.yi > obj1.yi ) {
            obj2.active = false;
            obj2.item = "null";
            obj1.maskCounter += 1;
            if (obj1.maskCounter === 6) {
              obj1.item = "null";
              obj1.active = false;
            }
          }
        }

        if ((obj2.item === "bob" || obj2.item === "mike") && obj2.item === "mask") {
          if(obj2.xi > (obj1.xi - obj1.frameWidth/2 + 10) && obj2.xi < (obj1.xi + obj1.frameWidth/2 - 10) 
          && obj2.yi < (obj1.yi + obj1.frameHeight*3/4) && obj2.yi > obj1.yi ) {
            obj2.active = false;
            obj2.item = "null";
            obj1.maskCounter += 1;
            if (obj1.maskCounter === 3) {
              obj1.item = "null";
              obj1.active = false;
            }
          }
        }


        if (obj1.item === "nurse" && (obj2.item === "karen" || obj2.item === "bob" || obj2.item === "mike")) {
          if (obj1.xi + obj1.frameWidth > obj2.xi && obj1.xi < obj2.xi + obj2.frameWidth
            && obj1.yi > obj2.yi - 20 && obj1.yi < obj2.yi + 20) {
              console.log("HI")
            obj1.damage += 1;
            obj2.xi += 6;
            if (obj1.damage === 20) {
              obj1.active = false;
              obj1.item = "null";
            }
          }
        }

        if (obj2.item === "nurse" && (obj1.item === "karen" || obj1.item === "bob" || obj2.item === "mike")) {
          if (obj2.xi + obj2.frameWidth > obj1.xi && obj2.xi < obj1.xi + obj1.frameWidth
            && obj2.yi > obj1.yi - 20 && obj2.yi < obj1.yi + 20) {
              console.log("hey")
            obj2.damage += 1;
            obj1.xi += 6;
            if (obj2.damage === 20) {
              obj2.active = false;
              obj2.item = "null";
            }
          }
        }

        if(obj2.item === "sanitizer" && (obj1.item === "bob" || obj1.item === "karen" || obj1.item === "mike")) {
          if((obj1.xi < obj2.posX + obj2.scaleWidth - 65) && (obj2.posX < obj1.xi + obj1.frameWidth - 35) && 
            (obj1.yi + obj1.frameHeight / 2 < obj2.posY + obj2.scaleHeight) && (obj2.posY < obj1.yi + obj1.frameHeight / 2)) {
            
              let destArr = allObjs.filter((obj) => ((obj.item === "karen" || obj.item === "bob" || obj.item === "mike") && (obj.xi < obj2.posX + obj2.scaleWidth + 150) &&
            (obj2.posX < obj.xi + obj.frameWidth - 35) && (obj.yi + obj.frameHeight/2 < obj2.posY + obj2.scaleHeight) && (obj2.posY < obj.yi + obj.frameHeight/2)))
            
            for(let k = 0; k < destArr.length; k++) {
              destArr[k].item = "null";
              destArr[k].active = false;
            }

            obj2.item = "null";
            obj2.active = false;
          }
        }
        
        if(obj1.item === "sanitizer" && (obj2.item === "bob" || obj2.item === "karen" || obj2.item === "mike")) {
          if((obj2.xi < obj1.posX + obj1.scaleWidth - 65) && (obj1.posX < obj2.xi + obj2.frameWidth - 35) && 
            (obj2.yi + obj2.frameHeight / 2 < obj1.posY + obj1.scaleHeight) && (obj1.posY < obj2.yi + obj2.frameHeight / 2)) {
            
            let destArr = allObjs.filter((obj) => ((obj.item === "karen" || obj.item === "bob" || obj.item === "mike") && (obj.xi < obj1.posX + obj1.scaleWidth + 150) &&
            (obj1.posX < obj.xi + obj.frameWidth - 35) && (obj.yi + obj.frameHeight/2 < obj1.posY + obj1.scaleHeight) && (obj1.posY < obj.yi + obj.frameHeight/2)))
            
            for(let k = 0; k < destArr.length; k++) {
              destArr[k].item = "null";
              destArr[k].active = false;
            }

            obj1.item = "null";
            obj1.active = false;
          }
        }

        if (obj2.item === "newspaper" && (obj1.item === "bob" || obj1.item === "karen" || obj1.item === "mike")) {
          if ((obj1.xi < obj2.posX + obj2.scaleWidth - 35) && (obj2.posX < obj1.xi + obj1.frameWidth - 35) &&
            (obj1.yi + obj1.frameHeight / 2 < obj2.posY + obj2.scaleHeight) && (obj2.posY < obj1.yi + obj1.frameHeight / 2)) {
              obj1.xi += obj1.speed;
              obj2.damage += 1;
              if (obj2.damage > 100) {
                obj2.item = "null";
                obj2.active = false;
              }
          }
        }

        if (obj1.item === "newspaper" && (obj2.item === "bob" || obj2.item === "karen" || obj2.item === "mike")) {
          if ((obj2.xi < obj1.posX + obj1.scaleWidth - 35) && (obj1.posX < obj2.xi + obj2.frameWidth - 35) &&
            (obj2.yi + obj2.frameHeight / 2 < obj1.posY + obj1.scaleHeight) && (obj1.posY < obj2.yi + obj2.frameHeight / 2)) {
            obj2.xi += obj2.speed;
            obj1.damage += 1;
            if (obj1.damage > 100) {
              obj1.item = "null";
              obj1.active = false;
            }
          }
        }

        if(obj1.item === "karen" || obj1.item === "bob" || obj1.item === "mike") {
          if(obj1.xi < 200) {
          this.gameState = "lost";
          }
        }

        if(obj2.item === "karen" || obj2.item === "bob" || obj2.item === "mike") {
          if(obj2.xi < 200) {
            this.gameState = "lost";
          }
        }

      }
    }
  }

}

