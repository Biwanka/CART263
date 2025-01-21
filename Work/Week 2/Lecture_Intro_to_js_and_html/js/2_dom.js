window.onload = setup
function setup() {
    console.log("running setup");

    //if you use getElementById and the querySelctor only get one element
    //but if you use getElementByTagName = you get an array
    console.log(document.getElementById("one"));
    console.log(document.querySelector("#one"));
    //if you want to access a class you use a . ex .one
    console.log(document.getElementByTageName("div"));

    //this will select the elelemt in the 0 position therefore the first one
    console.log(document.querySelector("div")[0]);

    //this in the consol will gitve the number in the array
    console.log(document.querySelector("div").lenght);

    console.log
    console.log("running setup");
}