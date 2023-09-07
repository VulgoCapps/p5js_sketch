let posicaoVertical;

function setup() {
  createCanvas(500, 500);
  posicaoVertical = 250;
}
  
function draw() {
  if(posicaoVertical < 400){
    background("lightblue");
    circle(250, posicaoVertical, 300) ;
  
    posicaoVertical++ ;
    
  }else {
    background("black")
  
  }
  fill("orange");
  
  fill("darkblue");
  rect(0, 250, 500, 350);
  fill("khaki");
  rect(0, 400, 500, 100);
  
}