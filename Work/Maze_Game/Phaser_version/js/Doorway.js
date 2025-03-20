class Doorway extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height) {
        super(scene, x, y, width, height, 0xffffff, 0); // Transparent rectangle
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //  Correct way to add physics to a non-sprite object
        scene.physics.world.enable(this);

        // Make sure it's treated as a sensor (no collision, only triggers overlap)
        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
        this.body.setSize(width, height);
        //this.doorways = this.physics.add.group();
    }

}

export default Doorway;
// constructor(scene, x, y, width, height, targetRoom, spawnX, spawnY) {
//     super(scene, x, y, 'doorway');

//     this.scene = scene;
//     this.targetRoom = targetRoom;
//     this.spawnX = spawnX;
//     this.spawnY = spawnY;

//     this.scene.add.existing(this);
//     this.scene.physics.add.existing(this, true);

//     this.setSize(width, height);
//     this.setAlpha(0.2); //makes the wall invisible

//   this.setDisplaySize(width, height); // Resize the sprite


// console.log(`Wall created at X=${this.x}, Y=${this.y}, Width=${this.displayWidth}, Height=${this.displayHeight}`);
// Enable overlap detection
//         this.scene.physics.add.overlap(scene.character, this, this.onOverlap, null, this);
//     }

//     onOverlap(character) {
//         console.log(`Transitioning to ${this.targetRoom}...`);

//         // Switch to new room and place character at spawn location
//         this.scene.currentRoom = new Room(this.scene, this.targetRoom);
//         character.x = this.spawnX;
//         character.y = this.spawnY;



