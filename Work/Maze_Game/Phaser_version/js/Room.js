class Room extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {

        super(scene, x, y, 'room');
        this.scene = scene;
        this.background = scene.add.image(400, 300, roomKey);
        this.walls = scene.physics.add.staticGroup();

    }
    update(time, delta) {
        if (roomKey === 'room1') {
            this.walls.add(new Wall(scene, 200, 300, 400, 20));

        }

        else if (roomKey === 'room2') {
            this.walls.add(new Wall(scene, 500, 300, 400, 20));
        }

        this.scene.physics.add.collider(character.sprite, this.walls);


    }

}

export default Room;