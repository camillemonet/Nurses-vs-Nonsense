
import Board from "./board";

export default class StoreDefense {

  constructor(canvas, canvas2) {
    this.canvas = canvas;
    this.canvas2 = canvas2;
    
    // Entry Screen
    this.entryModal = document.getElementById("entry-modal");
    this.entryModalFirst = document.getElementById("entry-modal-first");
    this.setModalDiv = this.setModalDiv.bind(this);
    this.entryModal.onclick = this.setModalDiv;
    
    // Sound 
    this.audio = document.getElementById("audio");
    this.soundIcon = document.getElementById("sound-icon");
    this.soundOn = true;
    
    this.renderSound();
    this.setVolume = this.setVolume.bind(this);
    this.soundIcon.onclick = this.setVolume;

    canvas.height = 665;
    canvas.width = 1150;
    canvas2.height = 665;
    canvas2.width = 1150;

    // Set Context and Restart Game
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.ctx = canvas.getContext("2d");
    this.ctx2 = canvas2.getContext("2d");
    // this.restart();
  }

  restart() {
    this.board = new Board(this.dimensions, this.canvas2, this.ctx2, this.canvas, this.ctx);
    this.board.drawBackground();
  }

  setModalDiv() {
    let that = this;
    
    that.entryModalFirst.style.opacity = '0';
    setTimeout(function () { 
      that.entryModalFirst.remove(); 
      that.entryModal.style.opacity = '0';
      setTimeout(function () {
        that.entryModal.remove();
      }, 1000);
    }, 1000);
    
    this.audio.muted = false;
    this.audio.volume = 0.1;
    this.audio.play();

    this.restart();
  }

  renderSound() {
    let template;
    if (this.soundOn === true) {
      template = '<i class="fas fa-volume-up"></i>'
    } else {
      template = '<i class="fas fa-volume-off"></i>'
    }
    this.soundIcon.innerHTML = template;
  }

  setVolume() {
    if (this.soundOn) {
      this.soundOn = false;
      this.renderSound();
      this.audio.muted = true;
    } else {
      this.soundOn = true;
      this.renderSound();
      this.audio.muted = false;
      this.audio.volume = 0.1;
      this.audio.play();
    }
  }

}
