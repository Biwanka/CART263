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
    height: 60,
    image: undefined
}

let gameBackdrop = {
    image: undefined,
}

function preload() {
    longHallway.image = loadImage("assets/images/Long_Hallway.png");
    gameBackdrop.image = loadImage("assets/images/Paper_Backdrop.png");
}

function setup() {
    console.log("go")
    createCanvas(800, 600);
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
    rect(100, 0, longHallway.width, longHallway.height);
    image(longHallway.image, 100, 0);
    pop();

}