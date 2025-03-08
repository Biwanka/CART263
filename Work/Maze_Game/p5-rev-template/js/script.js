"use strict";

/**
 * Draws the character and has the different images to make it walk
 */
const character = {

    //the standard start of the charcter
    x: 170,
    y: 100,
    height: 50,
    width: 40,
    imageFront: undefined,
    imageBack: undefined,

    walk: {
        x: 2,
        y: 2,
    },

    //the images for the character walking facing the player . (going down)
    front: {
        imageRightLeg: undefined,
        imageMiddle: undefined,
        imageLeftLeg: undefined,
    },

    //the images for the character walking facing away from the player (going up)
    back: {
        imageRightLeg: undefined,
        imageMiddle: undefined,
        imageLeftLeg: undefined,
    },

    rightSide: {
        imageRightLeg: undefined,
        imageLeftLeg: undefined,
    },

    leftSide: {
        imageRightLeg: undefined,
        imageLeftLeg: undefined,
    },

}

//draws a rectangle hallway
const longHallway = {

    floor: {
        x: 100,
        y: 0,
        width: 150,
        height: 650,
        image: undefined,
    },

    leftWall: {
        x: 75,        //(100 - 25),//longHallway.floor.x - 25,
        y: 0,
        width: 25,
        height: 650,
        image: undefined,
    },

    rightWall: {
        x: 250,           //(100 + 150), //longHallway.floor.x + 150,
        y: 0,
        width: 25,
        height: 650,
        image: undefined,
    },
}

const hallway = {
    x: 400,
    y: 0,
    width: 200,
    height: 650,
    image: undefined,
}

//to help move the charcter between images 
let legPosition = 0;

//to help with the keydown. when the charcter is moving or not
let isMoving = false;

//the paper texture of the canvas
let gameBackdrop = {
    image: undefined,
}


function preload() {

    gameBackdrop.image = loadImage("assets/images/Paper_Backdrop.png");

    //long Hallways images 

    longHallway.floor.image = loadImage("assets/images/Long_Hallway_Floor.png");
    longHallway.leftWall.image = loadImage("assets/images/Long_Hallway_Left_Wall.png");
    longHallway.rightWall.image = loadImage("assets/images/Long_Hallway_Right_Wall.png");

    hallway.image = loadImage("assets/images/Hallway.png");

    //charcter images
    character.imageFront = loadImage("assets/images/Character_Front.png");
    character.imageBack = loadImage("assets/images/Character_Back.png");

    character.front.imageRightLeg = loadImage("assets/images/Character_Front_Right.png");
    character.front.imageMiddle = loadImage("assets/images/Character_Front_Middle.png");
    character.front.imageLeftLeg = loadImage("assets/images/Character_Front_Left.png");

    character.back.imageRightLeg = loadImage("assets/images/Character_Back_Right.png");
    character.back.imageMiddle = loadImage("assets/images/Character_Back_Middle.png");
    character.back.imageLeftLeg = loadImage("assets/images/Character_Back_Left.png");

    // characterFrontWalk.imageRightLeg = loadImage("assets/images/Character_Front_Right.png");
    // characterFrontWalk.imageLeftLeg = loadImage("assets/images/Character_Front_Left.png");
    // characterFrontWalk.imageMiddle = loadImage("assets/images/Character_Front_Middle.png");

    // characterBackWalk.imageRightLeg = loadImage("assets/images/Character_Back_Right.png");
    // characterBackWalk.imageLeftLeg = loadImage("assets/images/Character_Back_Left.png");

    // characterStill.imageFront = loadImage("assets/images/Character_Front.png");
    // characterStill.imageBack = loadImage("assets/images/Character_Back.png");
}

function setup() {
    console.log("go")
    createCanvas(1000, 650);

    //resize long Hallway

    longHallway.floor.image.resize(150, 650);
    longHallway.leftWall.image.resize(25, 650);
    longHallway.rightWall.image.resize(25, 650);

    hallway.image.resize(200, 650);


    //resize the images to fit better the game
    character.imageFront.resize(70, 75);
    character.imageBack.resize(70, 75);

    character.front.imageRightLeg.resize(70, 75);
    character.front.imageMiddle.resize(70, 75);
    character.front.imageLeftLeg.resize(70, 75);

    character.back.imageRightLeg.resize(70, 75);
    character.back.imageMiddle.resize(70, 75);
    character.back.imageLeftLeg.resize(70, 75);

    // longHallway.floor.image.resize(150, 650);

}

function draw() {
    background(gameBackdrop.image);
    moveCharacter();

    drawLongHallway();
    drawHallway();
    drawCharacter();

    blockWallCharacter();

}

function blockWallCharacter() {

    // if (!isMoving === false) {
    //     character.walk.x = 0;
    //     character.walk.y = 0;
    // }

    // else if (!isMoving === true) {
    //     character.walk.x = 2;
    //     character.walk.y = 2;
    // }

    character.x = constrain(character.x, longHallway.leftWall.x, longHallway.rightWall.x);
    // if (character.x < longHallway.leftWall.x || character.x > longHallway.rightWall.x) {
    //     isMoving = false
    //     character.walk.x = 0;
    //     character.walk.y = 0;
    // }

    // if (character.x < longHallway.leftWall.x || character.x > longHallway.rightWall.x) {
    //     isMoving = false
    //     character.walk.x = 0;
    //     character.walk.y = 0;
    // }
}

//makes the character walk
function moveCharacter() {
    //  console.log(keyIsDown)

    // if (!isMoving === false) {
    //     characterWalk.imageFront = characterWalk.imageFront;
    // }
    isMoving = false;

    if (keyIsDown(UP_ARROW)) {
        isMoving = true;

        //the character moves up
        character.y = character.y - character.walk.y;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                character.imageFront = character.back.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                character.imageFront = character.back.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                character.imageFront = character.back.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    if (keyIsDown(DOWN_ARROW)) {
        isMoving = true;

        //character moves down
        character.y = character.y + character.walk.y;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                character.imageFront = character.front.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                character.imageFront = character.front.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                character.imageFront = character.front.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    if (keyIsDown(LEFT_ARROW)) {
        isMoving = true;

        //the character moves left
        character.x = character.x - character.walk.x;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                character.imageFront = character.back.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                character.imageFront = character.back.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                character.imageFront = character.back.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    if (keyIsDown(RIGHT_ARROW)) {
        isMoving = true;

        //the character moves right
        character.x = character.x + character.walk.x;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                character.imageFront = character.back.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                character.imageFront = character.back.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                character.imageFront = character.back.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    else {
        isMoving = false;
        character.imageFront = character.imageFront;
        //it isnt working!!!!!!!
    }

}

function drawHallway() {

    push();
    rect(hallway.x, hallway.y, hallway.width, hallway.height);
    image(hallway.image, hallway.x, hallway.y);
    pop();
}


function drawLongHallway() {

    //draw Floor
    push();
    //rectMode(CENTER);
    //imageMode(CENTER);
    rect(longHallway.floor.x, longHallway.floor.y, longHallway.floor.width, longHallway.floor.height);
    image(longHallway.floor.image, longHallway.floor.x, longHallway.floor.y);
    pop();

    //draws left wall 

    push();
    rect(longHallway.leftWall.x, longHallway.leftWall.y, longHallway.leftWall.width, longHallway.leftWall.height);
    image(longHallway.leftWall.image, longHallway.leftWall.x, longHallway.leftWall.y);
    pop();

    //draws right wall 
    push();
    rect(longHallway.rightWall.x, longHallway.rightWall.y, longHallway.rightWall.width, longHallway.rightWall.height);
    image(longHallway.rightWall.image, longHallway.rightWall.x, longHallway.rightWall.y);
    pop();

}

//draws the character
function drawCharacter() {

    push();
    rectMode(CENTER);
    imageMode(CENTER);
    noFill();
    rect(character.x, character.y, character.width, character.height);
    image(character.imageFront, character.x, character.y);
    pop();

}




/**
* Returns true if a and b overlap, and false otherwise
* Assumes a and b have properties x, y, width and height to describe
* their rectangles, and that a and b are displayed centred on their
* x,y coordinates.*/
function centredRectanglesOverlap(a, b) {
    return (a.x + a.height / 2 > b.x - b.width / 2 &&
        a.x - a.height / 2 < b.x + b.width / 2 &&
        a.y + a.height / 2 > b.y - b.height / 2 &&
        a.y - a.height / 2 < b.y + b.height / 2);
}

