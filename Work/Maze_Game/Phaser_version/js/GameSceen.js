import Phaser from 'phaser';
import Character from '.Character.js';
import Room from './Room.js';
import Wall from './Wall.js';






class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    // const game = new Phaser.Game(config);
    // let character;
    //let room;

    preload() {

        //this.load.image('background', 'room1.png'); // load room background
        this.load.image('room1', 'assets/images/room1.png');
        this.load.image('room2', 'assets/images/room2.png');
        this.load.spritesheet('character', 'assets/images/character.png', { frameWidth: 32, frameHeight: 32 });

    }

    create() {

        // this.add.image(400, 300, 'background'); // ADD background image
        // character = this.physics.add.sprite(100, 100, 'character'); // create character with physics
        // room = new Room(this, 'room1'); //load first room
        this.character = new Character(this, 100, 100);
        this.room = new Room(this, 200, 200);
        this.wall = new Wall(this, 300, 300);

    }

    update() {
        // character.handleInput();
        //characterMovement(); //handle character movement in phaser
        this.character.update(time, delta);
        this.room.update(time, delta);
        this.wall.update(time, delta);
    }
}
export default GameScene;