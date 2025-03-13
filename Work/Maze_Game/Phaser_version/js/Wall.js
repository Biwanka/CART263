class Wall extends Phaser.GameObjects.Sprite { // class Wall extends Phaser.Physics.Arcade.Sprite
    constructor(scene, x, y) {
        super(scene, x, y, 'wall');

    }

    update(time, delta) {
        scene.physics.add.existing(this, true);
        this.setSize(width, height);
        scene.add.existing(this);

    }
}
export default Wall;