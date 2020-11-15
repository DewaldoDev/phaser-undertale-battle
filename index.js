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
var heart;

function preload() {
  this.load.image("heart", "https://64.media.tumblr.com/avatar_6a16f384117d_128.pnj");
}

function create() {
  heart = this.add.sprite(400, 300, "heart");
  heart.displayHeight = 20;
  heart.displayWidth = 20;
}

function update() {
  const cursorKeys = this.input.keyboard.createCursorKeys();
  if (cursorKeys.up.isDown) {
    heart.y -= 4;
  }  
  if (cursorKeys.down.isDown) {
    heart.y += 4;
  }
  if (cursorKeys.right.isDown) {
    heart.x += 4;
  }
  if (cursorKeys.left.isDown) {
    heart.x -= 4;
  }
}
