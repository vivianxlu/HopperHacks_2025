import Phaser from 'phaser';
import Character from './character.js';
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
  background.setInteractive();

  create_pirate(this);
  create_pirate(this);
  create_pirate(this);
  create_pirate(this);
  create_pirate(this);
  create_pirate(this);
  create_pirate(this);
  create_pirate(this);
  create_pirate(this);
  create_pirate(this);
  create_pirate(this);
  create_pirate(this);

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

function create_pirate(scene) {
  const pirate = new Character("luffy", 100, 0, 0, 0, {
    characterImage: scene.add.image(window.innerWidth / 2, window.innerHeight / 2, 'pirate'),
  });
  pirate.assets.barBackground = scene.add.rectangle(pirate.assets.characterImage.x, pirate.assets.characterImage.y - 100, pirate.health, 20, 0x000000);
  pirate.assets.healthBar = scene.add.rectangle(pirate.assets.characterImage.x, pirate.assets.characterImage.y - 100, pirate.health, 20, 0x00ff00);
  pirate.assets.characterImage.setScale(5, 5);
  pirate.assets.characterImage.setInteractive();
  scene.input.setDraggable(pirate.assets.characterImage);
  scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
    updateAssets(pirate);
    gameObject.x = dragX;
    gameObject.y = dragY;
  });
  return pirate;
}

function updateAssets(pirate) {
  pirate.assets.barBackground.setPosition(pirate.assets.characterImage.x, pirate.assets.characterImage.y - 100);
  pirate.assets.healthBar.setPosition(pirate.assets.characterImage.x, pirate.assets.characterImage.y - 100);
}

function update() {

}