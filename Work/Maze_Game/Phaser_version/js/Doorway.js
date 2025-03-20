class Doorway extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height, targetRoom, targetX, targetY) {
        super(scene, x, y, width, height, 0xffffff, 0); // Transparent rectangle

        this.scene = scene;
        this.targetRoom = targetRoom; // Room to transition to
        this.targetX = targetX; // X position after transition
        this.targetY = targetY; // Y position after transition

        // Add Doorway to the scene
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true); // Static body to detect overlap

        // Optional: Make it visible for debugging
        this.setStrokeStyle(1, 0xff0000); // Red border
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



