import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'mygame'})
    const tileset = map.addTilesetImage('mygame', 'tiles')

    map.createStaticLayer('main', tileset)

    wallsLayer.estCollisionByProperty({collides: true})
  }
}