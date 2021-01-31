import Phaser from "phaser";
import heartImg from "./assets/heart.png";
import starImg from "./assets/star.png";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("heart", heartImg);

  this.load.image("star", starImg);
}

function create() {
  // Create boundry for heart to collide with
  const battleBounds = new Phaser.Geom.Rectangle(275, 175, 250, 250);
  this.add.graphics().lineStyle(5, 0xffffff).strokeRectShape(battleBounds);

  // Poisition and resize heart sprite
  this.heart = this.physics.add.image(400, 300, "heart");
  this.heart.displayHeight = 20;
  this.heart.displayWidth = 20;
  this.heart.setCollideWorldBounds(true);

  // See example: https://www.phaser.io/examples/v3/view/physics/arcade/custom-bounds
  this.heart.body.setBoundsRectangle(battleBounds);

  // Create the star sprite
  this.star = this.physics.add.image(100, 100, "star");

  this.cursorKeys = this.input.keyboard.createCursorKeys();
}

function update() {
  this.heart.setVelocity(0);

  if (this.cursorKeys.up.isDown) {
    this.heart.setVelocityY(-100);
  } else if (this.cursorKeys.down.isDown) {
    this.heart.setVelocityY(100);
  }
  if (this.cursorKeys.right.isDown) {
    this.heart.setVelocityX(100);
  } else if (this.cursorKeys.left.isDown) {
    this.heart.setVelocityX(-100);
  }
}
