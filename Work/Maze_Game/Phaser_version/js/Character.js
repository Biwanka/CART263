class Character extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'character', 0); // Set frame 0 (first frame of the spritesheet)

        this.scene = scene;

        // Debugging Logs
        console.log("Character sprite:", this.texture.key);

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);

        // Set size manually in case it's too small
        this.setScale(2); // Try making it bigger
        this.setSize(32, 32); // Set a size

        // Add animations
        this.scene.anims.create({
            key: 'walk',
            frames: this.scene.anims.generateFrameNumbers('character', { start: 0, end: 3 }), // Adjust frame range
            frameRate: 10,
            repeat: -1
        });

        this.play('walk'); // Play walk animation by default

        // this.setAlpha(1); // Ensure it's not invisible

        //    this.sprite = scene.physics.add.sprite(x, y, 'character');



        //Handle input keys
        this.keys = scene.input.keyboard.createCursorKeys();
        this.speed = 150;

        console.log("Character created:", this.x, this.y);
    }

    update() {

        console.log(`Character position: X=${this.x}, Y=${this.y}`);
        this.setVelocity(0);


        if (this.keys.left.isDown) {
            this.setVelocityX(-this.speed);
        }

        else if (this.keys.right.isDown) {
            this.setVelocityX(this.speed);
        }

        if (this.keys.up.isDown) {
            this.setVelocityY(-this.speed);
        }

        else if (this.keys.down.isDown) {
            this.setVelocityY(this.speed);
        }
    }
}

export default Character;

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