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
  this.heart = this.physics.add.image(400, 300, "heart");
  this.heart.displayHeight = 20;
  this.heart.displayWidth = 20;
  this.heart.setCollideWorldBounds(true);

  const battleBounds = this.physics.add.staticGroup();
  this.battleBox = this.add.rectangle(400, 300, 250, 250);
  this.battleBox.setStrokeStyle(5, 0xffffff);
  battleBounds.add(this.battleBox);

  this.physics.add.collider(this.heart, battleBounds);

  this.star = this.physics.add.image(100, 100, "star");

  this.cursorKeys = this.input.keyboard.createCursorKeys();
}

function update() {
  this.heart.setVelocity(0);

  const touchingRight =
    this.heart.x + this.heart.displayWidth / 2 >=
    this.battleBox.x + this.battleBox.width / 2;
  const touchingLeft =
    this.heart.x - this.heart.displayWidth / 2 <=
    this.battleBox.x - this.battleBox.width / 2;
  const touchingBottom =
    this.heart.y + this.heart.displayHeight / 2 >=
    this.battleBox.y + this.battleBox.height / 2;
  const touchingTop =
    this.heart.y - this.heart.displayHeight / 2 <=
    this.battleBox.y - this.battleBox.height / 2;

  if (this.cursorKeys.up.isDown && !touchingTop) {
    this.heart.setVelocityY(-100);
  } else if (this.cursorKeys.down.isDown && !touchingBottom) {
    this.heart.setVelocityY(100);
  }
  if (this.cursorKeys.right.isDown && !touchingRight) {
    this.heart.setVelocityX(100);
  } else if (this.cursorKeys.left.isDown && !touchingLeft) {
    this.heart.setVelocityX(-100);
  }
}
