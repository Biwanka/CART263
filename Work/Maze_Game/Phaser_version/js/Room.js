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
        this.walls = this.scene.physics.add.staticGroup(); // Makes walls static
        this.createWalls();


        // let wall = this.walls.create(x, y, 'wallTexture');
        // wall.setScale(1).refreshBody(); // Refresh collision bounds

    }

    createWalls() {
        this.walls.clear(true, true);

        if (this.roomKey === 'room1') {
            this.walls.add(new Wall(this.scene, 318, 300, 30, 600)); // this is the left wall
            this.walls.add(new Wall(this.scene, 454, 300, 30, 600)); //this is the right wall
        } else if (this.roomKey === 'room2') {
            this.walls.add(new Wall(this.scene, 290, 300, 30, 600));
        }
    }

    checkTransition(character) {
        if (this.roomKey === 'room1' && character.y <= 40) {
            this.changeRoom(character, 'room2', 590);
        } else if (this.roomKey === 'room2' && character.y >= 590) {
            this.changeRoom(character, 'room1', 40);
        }
    }

    changeRoom(character, newRoomKey, newY) {
        console.log(`Transitioning to ${newRoomKey}...`);

        //  Keep the character and only change background & walls
        this.background.setTexture(newRoomKey);
        this.roomKey = newRoomKey;

        this.walls.getChildren().forEach(wall => wall.destroy());
        this.createWalls();

        character.y = newY;

        //  Re-add collision so character interacts with new walls
        this.scene.physics.add.collider(character, this.walls);
    }
}

export default Room;
