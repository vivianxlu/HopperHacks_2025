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
  this.load.image('pirate', 'assets/characters/BunnyIdleF.png');
}

function create() {
  const background = this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'beach');
  const pirate = this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'pirate');

  pirate.setScale(5, 5);

  background.setInteractive();
  pirate.setInteractive();

  this.input.setDraggable(pirate);
  this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
    gameObject.x = dragX;
    gameObject.y = dragY;
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
      const widthScaleFactor = window.innerWidth / background.width;
      background.setScale(widthScaleFactor, widthScaleFactor);
      background.setPosition(window.innerWidth / 2, window.innerHeight / 2);
    } else {
      const heightScaleFactor = window.innerHeight / background.height;
      background.setScale(heightScaleFactor, heightScaleFactor);
      background.setPosition(window.innerWidth / 2, window.innerHeight / 2);
    }
  })
}

function update() {

}