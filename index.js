import Phaser from "phaser";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
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
  this.load.image("heart", "https://64.media.tumblr.com/avatar_6a16f384117d_128.pnj");
}

function create() {
  this.heart = this.add.sprite(400, 300, "heart");
  this.heart.displayHeight = 20;
  this.heart.displayWidth = 20;

  this.keys = this.input.keyboard.createCursorKeys();
}

function update() {
  if (this.keys.up.isDown) {
    this.heart.y -= 4;
  }  
  if (this.keys.down.isDown) {
    this.heart.y += 4;
  }
  if (this.keys.right.isDown) {
    this.heart.x += 4;
  }
  if (this.keys.left.isDown) {
    this.heart.x -= 4;
  }
}