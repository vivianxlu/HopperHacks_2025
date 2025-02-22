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
    preload: preload,
    create,
    update
  }
}

const game = new Phaser.Game(config);

function preload() {
  this.load.image('beach', 'assets/background/beach_background_1.jpg');
}

function create() {
  this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'beach');
}

function update() {

}