import Phaser from "phaser";


export default class Scene extends Phaser.Scene {

  constructor() {
    super("GameScene");
  }

  preload() {
    // 加载背景
    this.load.image("sky", "/game/sky.png");
    // 加载地面
    this.load.image("ground", "/game/platform.png");
    // 加载星星
    this.load.image("star", "/game/star.png");

  }

  create() {
    console.log("创建场景");
    // 添加背景
    this.add.image(400, 300, "sky").setScale(2, 1);
    this.add.image(400, 300, 'star');
    const platforms = this.physics.add.staticGroup();
    platforms.create(400, 500, 'ground').setScale(10).refreshBody();
    // platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(1050, 220, 'ground');
    console.log(platforms);
    // 添加地面
    //    console.log(logo)
    //     this.tweens.add({
    //       targets: logo,
    //       y: 350,
    //       duration: 1500,
    //       ease: 'Sine.inOut',
    //       yoyo: true,
    //       repeat: -1
    //     });
  }
}
