"use strict";

let characterFrontWalk = [
    {
        imageRightLeg: undefined,
        imageLeftLeg: undefined,
    }
]

let characterBackWalk = [
    {
        imageLegLeft: undefined,
        imageLegRight: undefined,
    }
]

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
}

function setup() {
    console.log("go")
    createCanvas(1000, 650);
    background(gameBackdrop.image);



}

function draw() {

    drawLongHallway();
    drawCharacter();
    moveCharacter();
    blockWallCharacter();

}




function drawLongHallway() {
    push();
    rectMode(CENTER);
    imageMode(CENTER);
    rect(100, 10, longHallway.width, longHallway.height);
    image(longHallway.image, 100, 10);
    pop();

}