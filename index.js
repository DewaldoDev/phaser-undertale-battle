import Phaser from "phaser";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: true
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
  this.heart = this.physics.add.image(400, 300, "heart");
  this.heart.displayHeight = 20;
  this.heart.displayWidth = 20;
  this.heart.setCollideWorldBounds(true);

  this.battleBounds = this.add.rectangle(400, 300, 250, 250);
  this.battleBounds.setStrokeStyle(5, 0xFFFFFF);

  this.cursorKeys = this.input.keyboard.createCursorKeys();
}

function update() {
  this.heart.setVelocity(0);

  if (this.cursorKeys.up.isDown) {
    this.heart.setVelocityY(-200);
  } else if (this.cursorKeys.down.isDown) {
    this.heart.setVelocityY(200);
  }
  if (this.cursorKeys.right.isDown) {
    this.heart.setVelocityX(200);
  } else if (this.cursorKeys.left.isDown) {
    this.heart.setVelocityX(-200);
  }
}
