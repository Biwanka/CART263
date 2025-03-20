import Wall from './Wall.js';
import Doorway from './Doorway.js';

class Room extends Phaser.GameObjects.Container {
    constructor(scene, roomKey) {

        super(scene);

        this.scene = scene;
        this.roomKey = roomKey;
        this.scene.add.existing(this);

        //add room background
        this.background = this.scene.add.image(400, 300, roomKey);
        this.background.setDisplaySize(this.scene.scale.width, this.scene.scale.height);

        this.walls = this.scene.physics.add.staticGroup(); // Makes walls static
        this.createWalls();

        this.doorways = this.scene.physics.add.staticGroup()
        this.createDoorways();

    }

    createWalls() {
        this.walls.clear(true, true);

        if (this.roomKey === 'room1') {
            this.walls.add(new Wall(this.scene, 318, 300, 30, 600)); // this is the left wall
            this.walls.add(new Wall(this.scene, 454, 300, 30, 600)); //this is the right wall
        }
        else if (this.roomKey === 'room2') {
            this.walls.add(new Wall(this.scene, 290, 300, 20, 600));//left wall
            this.walls.add(new Wall(this.scene, 775, 300, 30, 600));// right wall
            this.walls.add(new Wall(this.scene, 600, 600, 310, 50)); // bottom doorway wall
            this.walls.add(new Wall(this.scene, 530, 285, 320, 405)); //middle square wall
            this.walls.add(new Wall(this.scene, 380, 10, 200, 15));
        }

        else if (this.roomKey === 'room3') {
            this.walls.add(new Wall(this.scene, 300, 300, 50, 50));
        }
        else if (this.roomKey === 'room4') {
            this.walls.add(new Wall(this.scene, 300, 300, 50, 50));
        }
        else if (this.roomKey === 'room5') {
            this.walls.add(new Wall(this.scene, 300, 300, 50, 50));
        }
        else if (this.roomKey === 'room6') {
            this.walls.add(new Wall(this.scene, 300, 300, 50, 50));
        }

    }

    createDoorways() {
        //this.doorways.clear(true, true);
        if (this.roomKey === 'room1') {
            this.doorways.add(new Doorway(this.scene, 385, 5, 100, 10, 'room2', 365, 599));
        }

        else if (this.roomKey === 'room2') {
            this.doorways.add(new Doorway(this.scene, 365, 600, 125, 10, 'room1', 400, 70));
            this.doorways.add(new Doorway(this.scene, 520, 5, 100, 10, 'room3', 500, 595));
        }

        else if (this.roomKey === 'room3') {
            this.doorways.add(new Doorway(this.scene, 465, 600, 125, 10, 'room2', 500, 70));
            this.doorways.add(new Doorway(this.scene, 10, 300, 10, 100, 'room4', 500, 595));
        }

        else if (this.roomKey === 'room4') {
            this.doorways.add(new Doorway(this.scene, 365, 600, 125, 10, 'room3', 400, 70));
            this.doorways.add(new Doorway(this.scene, 520, 5, 100, 10, 'room5', 500, 595));
        }

        else if (this.roomKey === 'room5') {
            this.doorways.add(new Doorway(this.scene, 365, 600, 125, 10, 'room4', 400, 70));
            this.doorways.add(new Doorway(this.scene, 520, 5, 100, 10, 'room6', 500, 595));
        }

        else if (this.roomKey === 'room6') {
            this.doorways.add(new Doorway(this.scene, 365, 600, 125, 10, 'room5', 400, 70));
            // this.doorways.add(new Doorway(this.scene, 520, 5, 100, 10, 'room7', 500, 595));
        }
    }

    checkTransition(character) {
        this.scene.physics.world.overlap(character, this.doorways, this.onOverlap, null, this);
    }

    onOverlap(character, doorway) {
        console.log(`Transitioning to ${doorway.targetRoom}...`);

        this.background.setTexture(doorway.targetRoom);
        this.roomKey = doorway.targetRoom;

        character.x = doorway.targetX;
        character.y = doorway.targetY;

        this.walls.getChildren().forEach(wall => wall.destroy());
        this.createWalls();

        this.doorways.getChildren().forEach(doorway => doorway.destroy());
        this.createDoorways();

        this.scene.physics.add.collider(character, this.walls);
    }

}

export default Room;


// changeRoom(targetRoom, targetX, targetY) {
//     if (this.currentRoom) {
//         // Destroy the old room (if necessary)
//         this.currentRoom.destroy();
//     }

//     // Remove old doorways before switching
//     if (this.doorways) {
//         this.doorways.clear(true, true);
//     }

//     // Load the new room
//     this.currentRoom = new Room(this, targetRoom);
//     this.player.setPosition(targetX, targetY);

//     // Recreate doorways for the new room
//     this.doorways = this.add.group(); // Create a new group for doorways
//     this.currentRoom.createDoorways(this.doorways);
// }

// changeRoom(character, newRoomKey, newX, newY) {
//     console.log(`Transitioning to ${newRoomKey}...`);

//     //  Keep the character and only change background & walls
//     this.background.setTexture(newRoomKey);
//     this.roomKey = newRoomKey;

//     this.walls.getChildren().forEach(wall => wall.destroy());
//     this.createWalls();

//     character.y = newY;
//     character.x = newX;

//     //  Re-add collision so character interacts with new walls
//     this.scene.physics.add.collider(character, this.walls);
//     //this.scene.physics.add.overlap(scene.character, this, this.onOverlap, null, this);
// }