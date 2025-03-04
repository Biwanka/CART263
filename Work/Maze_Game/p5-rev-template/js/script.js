"use strict";

let characterFrontWalk = [
    {
        imageRightLeg: undefined,
        imageLeftLeg: undefined,
    }
]

let characterBackWalk = [
    {
        imageRightLeg: undefined,
        imageLeftLeg: undefined,
    }
]

let characterStill = {

    x: undefined,
    y: undefined,
    height: 55,
    width: 40,
    image: {
        front: undefined,
        back: undefined,
    }

}

const rightWall = {
    x: undefined,
    y: undefined,
    width: 30,
    height: 600,
    image: undefined
}

const lefttWall = {
    x: undefined,
    y: undefined,
    width: 30,
    height: 600,
    image: undefined
}

const longHallway = {

    x: undefined,
    y: undefined,
    width: 50,
    height: 600,
    image: undefined
}

let gameBackdrop = {
    image: undefined,
}

function preload() {
    longHallway.image = loadImage("assets/images/trial.png");
    gameBackdrop.image = loadImage("assets/images/Paper_Backdrop.png");
    characterFrontWalk.imageRightLeg = loadImage("assets/images/Character_Front_Right.png");
    characterFrontWalk.imageLeftLeg = loadImage("assets/images/Character_Front_Left.png");
    characterBackWalk.imageRightLeg = loadImage("assets/images/Character_Back_Right.png");
    characterBackWalk.imageLeftLeg = loadImage("assets/images/Character_Back_Left.png");
    characterStill.image.front = loadImage("assets/images/Character_Front.png");
    characterStill.image.back = loadImage("assets/images/Character_Back.png");
}

function setup() {
    console.log("go")
    createCanvas(1000, 650);
    background(gameBackdrop.image);

    characterStill.image.front.resize(75, 80);

}

function draw() {

    drawLongHallway();
    drawCharacter();
    moveCharacter();
    blockWallCharacter();

}


function drawCharacter() {

    push();
    rectMode(CENTER);
    imageMode(CENTER);
    rect(100, 100, characterStill.width, characterStill.height);
    image(characterStill.image.front, 100, 100);
    pop();

}


function drawLongHallway() {
    push();
    rectMode(CENTER);
    imageMode(CENTER);
    rect(100, 10, longHallway.width, longHallway.height);
    image(longHallway.image, 100, 10);
    pop();

}