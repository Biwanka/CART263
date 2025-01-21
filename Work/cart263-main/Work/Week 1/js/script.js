"use strict";

function setup() {
    console.log("go")
    createCanvas(900, 400);
}

function draw() {

    background(0, 0, 0);

    let x = 20;
    let alpha = 50;

    while (x <= width) {
        fill(255, 255, 255, alpha);
        rect(x, 70, 60, 60);
        alpha = alpha + 50;
        x = x + 100;
    }
}
