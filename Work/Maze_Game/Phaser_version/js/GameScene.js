//import Phaser from '../libraries/phaser.js';
import Character from './Character.js';
import Room from './Room.js';
//import Wall from './Wall.js';


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
        //this.load.image('character', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
        console.log("Character image loaded:", this.textures.exists('character'));
    }

    create() {


        //console.log("Character created:", this.character);
        this.currentRoom = new Room(this, 'room1');
        this.character = new Character(this, 400, 300);

        // FIX: Ensure character is added before collision
        this.add.existing(this.character);

        // FIX: Use `this.character` directly (no `.sprite`)
        this.physics.add.collider(this.character, this.currentRoom.walls);
        this.anims.create({
            key: 'walk_down',
            frames: [
                { key: 'character_front_left' },
                { key: 'character_front_middle' },
                { key: 'character_front_right' }
            ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'walk_up',
            frames: [
                { key: 'character_back_left' },
                { key: 'character_back_middle' },
                { key: 'character_back_right' }
            ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'walk_left',
            frames: [
                { key: 'character_left_side_left' },
                { key: 'character_left_side_middle' },
                { key: 'character_left_side_right' }
            ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'walk_right',
            frames: [
                { key: 'character_right_side_left' },
                { key: 'character_right_side_middle' },
                { key: 'character_right_side_right' }
            ],
            frameRate: 10,
            repeat: -1
        });

    }

    update(time, delta) {
        // character.handleInput();
        //characterMovement(); //handle character movement in phaser
        this.character.update(time, delta);
        this.currentRoom.checkTransition(this.character);
        // this.room.update(time, delta);
        // this.wall.update(time, delta);
    }
}
export default GameScene;