

function setup() {

createCanvas(400, 400);

background("black");

}

function draw() {

stroke("purple");

fill("black");

if(mouseIsPressed === false){

rect(mouseY, mouseX,20, 35);

}

}
