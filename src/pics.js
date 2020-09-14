export default class Pics {

  constructor(dimensions, canvas, ctx) {
    this.dimensions = dimensions;
    this.canvas = canvas;
    this.ctx = ctx;
  }

  karenImage() {
    this.karen = new Image();
    this.karen.src = "./assets/karen_spritesheet4.png";
    return this.karen;
  }

  bobImage() {
    this.bob = new Image();
    this.bob.src = "./assets/bob_spritesheet.png";
    return this.bob;
  }

  mikeImage() {
    this.mike = new Image();
    this.mike.src = "./assets/mike_spritesheet.png";
    return this.mike;
  }

  sanitizerImage() {
    this.sanitizer = new Image();
    this.sanitizer.src = "./assets/sanitizer.png";
    return this.sanitizer;
  }

  newspaperImage() {
    this.newspaper = new Image();
    this.newspaper.src = "./assets/newspaper.png";
    return this.newspaper;
  }

  nurseImage() {
    this.nurse = new Image();
    this.nurse.src = "./assets/nurse_spritesheet6.png";
    return this.nurse;
  }

  nurseImage2() {
    this.nurse2 = new Image();
    this.nurse2.src = "./assets/nurse_sprite.png";
    return this.nurse2;
  }

  mask() {
    this.mask = new Image();
    this.mask.src = "./assets/mask.png";
    return this.mask;
  }

  scientistImage() {
    this.science = new Image();
    this.science.src = "./assets/scientist_spritesheet2.png";
    return this.science;
  }

  plus() {
    this.plussign = new Image();
    this.plussign.src = "./assets/plus.png";
    return this.plussign;
  }

}