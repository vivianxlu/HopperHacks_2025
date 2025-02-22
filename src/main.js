import Phaser from 'phaser';
import './style.css';
import Character from './character.js';

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
  const pirate_img = this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'pirate');
  
  const pirate1 = new Character("luffy", 100, 0, 0, 0, {characterImage: pirate});
  const pirate2 = new Character("luffy", 100, 0, 0, 0, {characterImage: pirate});

  pirate1.assets.characterImage = pirate; 
  pirate2.assets.characterImage = pirate_img; 

  pirate.setScale(5, 5);

  render(this, pirate1);
  render(this, pirate2);
  

  background.setInteractive();
  pirate.setInteractive();
  pirate_img.setInteractive();

  this.input.setDraggable(pirate);
  this.input.setDraggable(pirate_img);
  this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
    updateAssets(this, pirate1);
    updateAssets(this, pirate2);
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

function updateAssets(scene, pirate){
  pirate.assets.barBackground.setPosition(pirate.assets.characterImage.x, pirate.assets.characterImage.y - 100);
  pirate.assets.healthBar.setPosition(pirate.assets.characterImage.x, pirate.assets.characterImage.y - 100);
}

function render(scene, pirate){
  const barBackground = scene.add.rectangle(pirate.assets.characterImage.x, pirate.assets.characterImage.y - 100, pirate.health, 20, 0x000000);
  const healthBar = scene.add.rectangle(pirate.assets.characterImage.x, pirate.assets.characterImage.y - 100, pirate.health, 20, 0x00ff00);
  pirate.assets.barBackground = barBackground;
  pirate.assets.healthBar = healthBar;
}

function update() {

}