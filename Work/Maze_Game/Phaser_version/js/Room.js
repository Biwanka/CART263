import Wall from './Wall.js';

class Room extends Phaser.GameObjects.Container {
    constructor(scene, roomKey) {

        super(scene);

        this.scene = scene;
        this.roomKey = roomKey;
        this.scene.add.existing(this);

        //add room background
        this.background = this.scene.add.image(400, 300, roomKey);

        this.background.setDisplaySize(this.scene.scale.width, this.scene.scale.height);
        //  this.walls.add(new Wall(this, 100, 200, 50, 200));  
        this.walls = this.scene.physics.add.staticGroup();
        this.createWalls();


    }

    createWalls() {

        if (this.roomKey === 'room1') {
            this.walls.add(new Wall(this.scene, 318, 300, 30, 600));
            this.walls.add(new Wall(this.scene, 454, 300, 30, 600));
        }

        else if (this.roomKey === 'room2') {
            this.walls.add(new Wall(this.scene, 500, 300, 400, 20));
        }
    }

    checkTransition(character) {

        this.scene.character.setVisible(true);  // Ensure it's visible
        this.scene.character.setActive(true);   // Ensure it's active
        this.scene.add.existing(this.scene.character); // Re-add if needed

        if (this.roomKey === 'room1' && character.y <= 50) {
            this.scene.currentRoom = new Room(this.scene, 'room2');
            character.y = 550;
        }

        else if (this.roomKey === 'room2' && character.y >= 550) {
            this.scene.currentRoom = new Room(this.scene, 'room1');
            character.y = 50;
        }


    }
}
export default Room;

// update(time, delta) {
//     if (roomKey === 'room1') {
//         this.walls.add(new Wall(scene, 200, 300, 400, 20));

//     }

//     else if (roomKey === 'room2') {
//         this.walls.add(new Wall(scene, 500, 300, 400, 20));
//     }

//     this.scene.physics.add.collider(character.sprite, this.walls);


// }
