import Phaser from 'phaser';
import './style.css';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  scene: {
    preload,
    create,
    update
  },
  scale: {
    width: sizes.width,
    height: sizes.height,
    mode: Phaser.Scale.RESIZE
  }
}

const game = new Phaser.Game(config);

function preload() {
  this.load.image('beach', 'assets/background/beach_background_1.jpg');
}

function create() {
  const background = this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'beach');

  background.setInteractive();

  this.input.setDraggable(background);
  window.addEventListener('resize', () => {
    const widthScaleFactor = window.innerWidth / background.width;
    background.setScale(widthScaleFactor, widthScaleFactor);
  })

}

function update() {

}