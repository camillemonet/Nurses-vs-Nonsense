import Pics from "./pics";

export default class Board {

  constructor(dimensions, canvas, ctx, canvasA, ctxA) {
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

    // this.nurseImg2 = new Image();
    // this.nurseImg2.src = "../assets/nurse_sprite.png";

    window.addEventListener('load', this.addImgObj)
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
      this.ctx.fillStyle = "#dbd49f";
      this.ctx.fillRect(120, 10, 100, 105);
      this.ctx.fillRect(230, 10, 100, 105);
      this.ctx.fillRect(340, 10, 100, 105);
    } else if (this.selected === 1) {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(120, 10, 100, 105);
      this.ctx.fillStyle = "#dbd49f";
      this.ctx.fillRect(10, 10, 100, 105);
      this.ctx.fillRect(230, 10, 100, 105);
      this.ctx.fillRect(340, 10, 100, 105);
    } else if (this.selected === 2) {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(230, 10, 100, 105);
      this.ctx.fillStyle = "#dbd49f";
      this.ctx.fillRect(10, 10, 100, 105);
      this.ctx.fillRect(120, 10, 100, 105);
      this.ctx.fillRect(340, 10, 100, 105);
    } else if (this.selected === 3) {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(340, 10, 100, 105);
      this.ctx.fillStyle = "#dbd49f";
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

    // that.ctx.drawImage(this.nurseImg2, 40, 13, 40, 40 * this.nurseImg2.height / this.nurseImg2.width);
    
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
    this.ctx.fillStyle = "#dbd49f";
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
          if (this.healthPts > 49) {
            this.animationToBeDrawn.push({ image: this.nurseImg, shift: 0, frameWidth: 84, frameHeight: 177, totalFrames: 21, currentFrame: 0, fps: 5, fpsInterval: 200, xi: r.x, yi: r.y - 85, type: "animation", moving: false})
            this.healthPts -= 50;
          }
          this.ctx.clearRect(0, 0, 950, 130);
          this.drawNavbar();
        } else if (this.selected === 1) {
          if (this.healthPts > 74) {
            this.imageObjToBeDrawn.push({ image: this.newspaperImg, frameWidth: 734, frameHeight: 656, posX: r.x - 5, posY: r.y-7, scaleWidth: 120, scaleHeight: 120 * 656/734 })
            this.healthPts -= 75;
          }
          this.ctx.clearRect(0, 0, 950, 130);
          this.drawNavbar();
        } else if (this.selected === 2) {
          if (this.healthPts > 49) {
            this.imageObjToBeDrawn.push({ image: this.sanitizerImg, frameWidth: 400, frameHeight: 421, posX: r.x - 10, posY: r.y - 25, scaleWidth: 120, scaleHeight: 120 * 421/400 })
            this.healthPts -= 50;
          }
          this.ctx.clearRect(0, 0, 950, 130);
          this.drawNavbar();
        } else if (this.selected === 3) {
          if (this.healthPts > 99) {
            this.imageObjToBeDrawn.push({ image: this.sanitizerImg, frameWidth: 400, frameHeight: 421, posX: r.x - 10, posY: r.y - 25, scaleWidth: 120, scaleHeight: 120 * 421/400 })
            this.healthPts -= 100;
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
      // this.ctx.fillRect(10, 10, 100, 105);
      this.ctx.fillRect(120, 10, 100, 105);
      this.ctx.fillRect(230, 10, 100, 105);
      this.ctx.fillRect(340, 10, 100, 105);
    } else if (this.healthpts < 100) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      // this.ctx.fillRect(10, 10, 100, 105);
      // this.ctx.fillRect(120, 10, 100, 105);
      // this.ctx.fillRect(230, 10, 100, 105);
      this.ctx.fillRect(340, 10, 100, 105);
    }
  }

  addImgObj(e) {
    this.fps = 5;
    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.startTime = this.then;
    this.animationToBeDrawn.push({ image: this.karenImg, shift: 0, frameWidth: 86, frameHeight: 176, totalFrames: 8, currentFrame: 0,
    fps: 5, fpsInterval: 200, xi: 950, yi: 50, type: "animation", moving: true });
    this.draw();
  }

  draw() {

    window.requestAnimationFrame(this.draw);

    let now = Date.now();
    let elapsed = now - this.then;
    let that = this;

    if (elapsed > that.fpsInterval) {
      that.then = now - (elapsed % that.fpsInterval);

      that.ctxA.clearRect(0, 0, that.canvas.width, that.canvas.height);
      let imageObj;

      for(let j = 0; j < that.imageObjToBeDrawn.length; j++) {
        imageObj = that.imageObjToBeDrawn[j];
        that.ctxA.drawImage(imageObj.image, 0, 0, imageObj.frameWidth, imageObj.frameHeight, imageObj.posX, imageObj.posY, imageObj.scaleWidth, imageObj.scaleHeight)
      }

      for (let jj = 0; jj < that.animationToBeDrawn.length; jj++) {
        imageObj = that.animationToBeDrawn[jj];

        that.ctxA.drawImage(imageObj.image, imageObj.shift, 0, imageObj.frameWidth, imageObj.frameHeight, imageObj.xi, imageObj.yi, imageObj.frameWidth, imageObj.frameHeight)
        imageObj.shift += imageObj.frameWidth + 1;

        if (imageObj.moving) {
          imageObj.xi -= 4;
        }

        if (imageObj.currentFrame == imageObj.totalFrames) {
          imageObj.shift = 0;
          imageObj.currentFrame = 0;
        }

        imageObj.currentFrame++;
      }
    }
  }
}
