"use strict";

function setup() {
    console.log("go")
    createCanvas(900, 400);
}

function draw() {
    background("black");

    //ellipse 1
    push();
    fill(235, 52, 116);
    ellipse(40, 50, 35, 35);
    pop();

    //ellipse 2
    push();
    fill(168, 50, 92);
    ellipse(100, 110, 55, 55);
    pop();

    //ellipse 1
    push();
    fill(125, 16, 60);
    ellipse(160, 180, 65, 65);
    pop();

}