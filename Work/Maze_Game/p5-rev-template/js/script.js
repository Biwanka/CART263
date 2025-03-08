"use strict";

/**
 * Draws the character and has the different images to make it walk
 */
const characterWalk = {

    //the standard start of the charcter
    x: 150,
    y: 100,
    height: 50,
    width: 40,
    imageFront: undefined,
    imageBack: undefined,

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

    //     side: {
    // image
    //     }

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
        x: undefined,//longHallway.floor.x - 30,
        y: 0,
        width: 30,
        height: 650,
        image: undefined,
    },

    rightWall: {
        x: undefined, //longHallway.floor.x + 151,
        y: 0,
        width: 30,
        height: 650,
        image: undefined,
    },
}

const hallway = {
    x: 400,
    y: 0,
    width: 210,
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
    characterWalk.imageFront = loadImage("assets/images/Character_Front.png");
    characterWalk.imageBack = loadImage("assets/images/Character_Back.png");

    characterWalk.front.imageRightLeg = loadImage("assets/images/Character_Front_Right.png");
    characterWalk.front.imageMiddle = loadImage("assets/images/Character_Front_Middle.png");
    characterWalk.front.imageLeftLeg = loadImage("assets/images/Character_Front_Left.png");

    characterWalk.back.imageRightLeg = loadImage("assets/images/Character_Back_Right.png");
    characterWalk.back.imageMiddle = loadImage("assets/images/Character_Back_Middle.png");
    characterWalk.back.imageLeftLeg = loadImage("assets/images/Character_Back_Left.png");

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
    longHallway.leftWall.image.resize(30, 650);
    longHallway.rightWall.image.resize(30, 650);

    hallway.image.resize(210, 650);


    //resize the images to fit better the game
    characterWalk.imageFront.resize(70, 75);
    characterWalk.imageBack.resize(70, 75);

    characterWalk.front.imageRightLeg.resize(70, 75);
    characterWalk.front.imageMiddle.resize(70, 75);
    characterWalk.front.imageLeftLeg.resize(70, 75);

    characterWalk.back.imageRightLeg.resize(70, 75);
    characterWalk.back.imageMiddle.resize(70, 75);
    characterWalk.back.imageLeftLeg.resize(70, 75);

    // longHallway.floor.image.resize(150, 650);

}

function draw() {
    background(gameBackdrop.image);
    moveCharacter();

    drawLongHallway();
    drawHallway();
    drawCharacter();

    //  blockWallCharacter();

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
        characterWalk.y -= 2;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                characterWalk.imageFront = characterWalk.back.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                characterWalk.imageFront = characterWalk.back.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                characterWalk.imageFront = characterWalk.back.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    if (keyIsDown(DOWN_ARROW)) {
        isMoving = true;

        //character moves down
        characterWalk.y += 2;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                characterWalk.imageFront = characterWalk.front.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                characterWalk.imageFront = characterWalk.front.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                characterWalk.imageFront = characterWalk.front.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    else {
        isMoving = false;
        characterWalk.imageFront = characterWalk.imageFront;
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
    rect(longHallway.floor.x - 30, longHallway.leftWall.y, longHallway.leftWall.width, longHallway.leftWall.height);
    image(longHallway.leftWall.image, longHallway.floor.x - 30, longHallway.leftWall.y);
    pop();

    //draws right wall 
    push();
    rect(longHallway.floor.x + 151, longHallway.rightWall.y, longHallway.rightWall.width, longHallway.rightWall.height);
    image(longHallway.rightWall.image, longHallway.floor.x + 151, longHallway.rightWall.y);
    pop();

}

//draws the character
function drawCharacter() {

    push();
    rectMode(CENTER);
    imageMode(CENTER);
    noFill();
    rect(characterWalk.x, characterWalk.y, characterWalk.width, characterWalk.height);
    image(characterWalk.imageFront, characterWalk.x, characterWalk.y);
    pop();

}
