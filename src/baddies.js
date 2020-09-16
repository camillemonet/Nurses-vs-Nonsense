import Pics from "./pics";

export default class Baddies {

  constructor(dimensions, canvas, ctx) {
    this.pics = new Pics(dimensions, canvas, ctx);
    this.rows = [80, 185, 290, 395, 500];

    this.karenImg = this.pics.karenImage();
    this.bobImg = this.pics.bobImage();
    this.mikeImg = this.pics.mikeImage();

    this.getBaddies = this.getBaddies.bind(this);
  }

  getBaddies() {
    return (this.levelOne().concat(this.levelTwo()).concat(this.levelThree()).concat(this.levelFour()).concat(this.levelFive()).concat(this.levelSix()).concat(this.levelSeven()))
  }

  levelOne() {
    let outputArr = [];

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 1300, yi: this.randomRow(), type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    });

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 86, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 1700, yi: this.randomRow(), type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    });

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 86, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 2050, yi: this.randomRow(), type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    });

    return(outputArr)
  }

  levelTwo() {
    let outputArr = [];

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 86, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 2250, yi: this.randomRow(), type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 86, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 2450, yi: this.randomRow(), type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 2500, yi: this.randomRow(), type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 2500, yi: this.randomRow(), type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 86, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 2600, yi: this.randomRow(), type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 2250, yi: this.randomRow(), type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 2250, yi: this.randomRow(), type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    return(outputArr);
  }

  levelThree() {
    let outputArr = [];

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 6550, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 6550, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 6550, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 86, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 3500, yi: this.randomRow(), type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 3000, yi: this.randomRow(), type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    return (outputArr)
  }

  levelFour() {
    let outputArr = [];

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 9550, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 9550, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 86, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 4650, yi: this.randomRow(), type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 4850, yi: this.randomRow(), type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 4850, yi: this.randomRow(), type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 4900, yi: this.randomRow(), type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 4800, yi: this.randomRow(), type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: 4850, yi: this.randomRow(), type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    return (outputArr)
  }

  levelFive() {
    let outputArr = [];

    let bobPoint = 4850;
    let karenPoint = 4450;
    
    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 200, yi: this.rows[0], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 100, yi: this.rows[1], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint, yi: this.rows[2], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 100, yi: this.rows[3], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 200, yi: this.rows[4], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 200, yi: this.rows[0], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 100, yi: this.rows[1], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint, yi: this.rows[2], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 100, yi: this.rows[3], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 200, yi: this.rows[4], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    return (outputArr)
  }

  levelSix() {
    let outputArr = [];

    let bobPoint = 5050;
    let karenPoint = 4850;
    let mikePoint = 7000;

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 200, yi: this.rows[0], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 100, yi: this.rows[1], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint, yi: this.rows[2], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 100, yi: this.rows[3], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 200, yi: this.rows[4], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 200, yi: this.rows[0], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 100, yi: this.rows[1], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint, yi: this.rows[2], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 100, yi: this.rows[3], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 200, yi: this.rows[4], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12000, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12000, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12000, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12000, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12000, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12000, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    return (outputArr)

  }

  levelSeven() {
    let outputArr = [];

    let bobPoint = 5950;
    let karenPoint = 5350;
    let mikePoint = 7000;

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 200, yi: this.rows[0], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 100, yi: this.rows[1], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint, yi: this.rows[2], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 100, yi: this.rows[3], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })

    outputArr.push({
      image: this.bobImg, shift: 0, frameWidth: 85, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: bobPoint + 200, yi: this.rows[4], type: "animation", item: "bob", start: 0, active: true, maskCounter: 0, speed: 6
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 200, yi: this.rows[0], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 100, yi: this.rows[1], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint, yi: this.rows[2], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })


    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 100, yi: this.rows[3], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    outputArr.push({
      image: this.karenImg, shift: 0, frameWidth: 73, frameHeight: 149, totalFrames: 7, currentFrame: 0,
      xi: karenPoint + 200, yi: this.rows[4], type: "animation", item: "karen", start: 0, active: true, maskCounter: 0, speed: 4
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12500, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12500, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12500, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12500, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12500, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    outputArr.push({
      image: this.mikeImg, shift: 0, frameWidth: 85, frameHeight: 150, totalFrames: 7, currentFrame: 0,
      xi: 12500, yi: this.randomRow(), type: "animation", item: "mike", start: 0, active: true, maskCounter: 0, speed: 12
    })

    return (outputArr)

  }

  randomRow() {
    return this.rows[Math.floor(Math.random() * this.rows.length)];
  }

}
