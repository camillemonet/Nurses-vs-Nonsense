export default class Pics {

  constructor(dimensions, canvas, ctx) {
    this.dimensions = dimensions;
    this.canvas = canvas;
    this.ctx = ctx;
  }

  karenImage() {
    this.karen = new Image();
    this.karen.src = "./assets/karen_spritesheet3.png";
    return this.karen;
  }

  bobImage() {
    this.bob = new Image();
    this.bob.src = "./assets/bob_spritesheet.png";
    return this.bob;
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
    this.nurse.src = "./assets/nurse_spritesheet3.png";
    return this.nurse;
  }

  nurseImage2() {
    this.nurse2 = new Image();
    this.nurse2.src = "./assets/nurse_sprite.png";
    return this.nurse2;
  }

}