class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'character');
        this.scene = scene;

    }

    update(time, delta) {

        this.sprite = scene.physics.add.sprite(x, y, 'character');
        this.sprite.setCollideWorldBounds(true);
        this.keys = scene.input.keyboard.createCursorKeys();


        let speed = 150;
        this.sprite.setVelocity(0);

        if (this.keys.left.isDown) {
            this.sprite.setVelocityX(-speed);
        }

        else if (this.keys.right.isDown) {
            this.sprite.setVelocityX(speed);
        }

        if (this.keys.up.isDown) {
            this.sprite.setVelocityY(-speed);
        }

        else if (this.sprite.key.down.isDown) {
            this.sprite.setVelocityY(speed);
        }

    }

    // handleInput() {

    //     let speed = 150;
    //     this.sprite.setVelocity(0);

    //     if (this.keys.left.isDown) {
    //         this.sprite.setVelocityX(-speed);
    //     }

    //     else if (this.keys.right.isDown) {
    //         this.sprite.setVelocityX(speed);
    //     }

    //     if (this.keys.up.isDown) {
    //         this.sprite.setVelocityY(-speed);
    //     }

    //     else if (this.sprite.key.down.isDown) {
    //         this.sprite.setVelocityY(speed);
    //     }
    // }

}

export default Character;