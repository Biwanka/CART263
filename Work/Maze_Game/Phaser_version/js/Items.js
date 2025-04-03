export class Item extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture, name) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.name = name;  //store item name
        this.setInteractive(); //make it clickable

    }

    interact(character, inventory, messageText) {

        if (!inventory.includes(this.name)) {
            inventory.push(this.name); //add the item to inventory
            messageText.setText(`${this.name} picked up!`); //show message
            // this.destroy();  //remove from scene


            // Remove item after a short delay
            this.scene.time.delayedCall(500, () => {
                this.destroy();
            });

        }
    }
}