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
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("heart", "https://64.media.tumblr.com/avatar_6a16f384117d_128.pnj");
}

function create() {
  const heart = this.add.sprite(400, 300, "heart");
  heart.displayHeight = 20;
}