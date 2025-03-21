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
        this.doorways = this.scene.physics.add.staticGroup();

        this.createWalls();
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
            this.walls.add(new Wall(this.scene, 380, 10, 200, 15));// top left wall
            this.walls.add(new Wall(this.scene, 700, 10, 200, 15));// top right wall
        }

        else if (this.roomKey === 'room3') {
            this.walls.add(new Wall(this.scene, 250, 290, 510, 60));
            this.walls.add(new Wall(this.scene, 300, 135, 610, 60));
            this.walls.add(new Wall(this.scene, 515, 450, 25, 325));
            this.walls.add(new Wall(this.scene, 620, 400, 25, 550));
        }
        else if (this.roomKey === 'room4') {
            this.walls.add(new Wall(this.scene, 400, 290, 800, 60));
            this.walls.add(new Wall(this.scene, 400, 140, 800, 60));
        }
        else if (this.roomKey === 'room5') {
            this.walls.add(new Wall(this.scene, 720, 500, 120, 200));
            this.walls.add(new Wall(this.scene, 720, 150, 120, 200));
            this.walls.add(new Wall(this.scene, 400, 15, 600, 60));
            this.walls.add(new Wall(this.scene, 400, 575, 600, 60));
            this.walls.add(new Wall(this.scene, 400, 300, 350, 265));
            this.walls.add(new Wall(this.scene, 80, 500, 120, 200));
            this.walls.add(new Wall(this.scene, 80, 150, 120, 200));
        }
        else if (this.roomKey === 'room6') {
            this.walls.add(new Wall(this.scene, 630, 120, 350, 350));
            this.walls.add(new Wall(this.scene, 630, 600, 350, 350));
            this.walls.add(new Wall(this.scene, 100, 60, 160, 150));
            this.walls.add(new Wall(this.scene, 350, 60, 160, 150));
            this.walls.add(new Wall(this.scene, 300, 600, 600, 30));
            this.walls.add(new Wall(this.scene, 15, 300, 20, 500));

        }
    }

    createDoorways() {
        this.doorways.clear(true, true);

        if (this.roomKey === 'room1') {
            this.doorways.add(new Doorway(this.scene, 385, 5, 100, 10, 'room2', 365, 599));
        }

        else if (this.roomKey === 'room2') {
            this.doorways.add(new Doorway(this.scene, 365, 600, 125, 10, 'room1', 400, 70));
            this.doorways.add(new Doorway(this.scene, 530, 5, 110, 10, 'room3', 575, 595));
        }

        else if (this.roomKey === 'room3') {
            this.doorways.add(new Doorway(this.scene, 560, 600, 115, 10, 'room2', 500, 70));
            this.doorways.add(new Doorway(this.scene, 10, 250, 10, 100, 'room4', 770, 245));
        }

        else if (this.roomKey === 'room4') {
            this.doorways.add(new Doorway(this.scene, 785, 245, 10, 115, 'room3', 450, 50));
            this.doorways.add(new Doorway(this.scene, 10, 245, 10, 115, 'room5', 770, 350));
        }

        else if (this.roomKey === 'room5') {
            this.doorways.add(new Doorway(this.scene, 785, 350, 10, 115, 'room4', 50, 250));
            this.doorways.add(new Doorway(this.scene, 10, 350, 10, 115, 'room6', 770, 370));
        }

        else if (this.roomKey === 'room6') {
            this.doorways.add(new Doorway(this.scene, 785, 400, 10, 125, 'room5', 50, 330));
            this.doorways.add(new Doorway(this.scene, 200, 10, 125, 10, 'room7', 200, 595));
        }
    }

    checkTransition(character) {
        this.scene.physics.world.overlap(character, this.doorways, this.onOverlap, null, this);
    }

    onOverlap(character, doorway) {
        console.log(`Transitioning to ${doorway.targetRoom}...`);

        this.background.setTexture(doorway.targetRoom);

        this.roomKey = doorway.targetRoom;
        character.setPosition(doorway.targetX, doorway.targetY);

        // Destroy old walls and doorways before creating new ones
        this.walls.clear(true, true);
        this.doorways.clear(true, true);

        this.createWalls();
        this.createDoorways();

        this.scene.physics.add.collider(character, this.walls);

        // this.roomKey = doorway.targetRoom;
        // character.x = doorway.targetX;
        // character.y = doorway.targetY;

        // this.walls.getChildren().forEach(wall => wall.destroy());
        // this.createWalls();

        // this.doorways.getChildren().forEach(doorway => doorway.destroy());
        // this.createDoorways();

        // this.scene.physics.add.collider(character, this.walls);
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