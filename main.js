function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    background("white");
}
function clearcanvas(){
    background("white")
}
function draw() {
    var x = random(255);
    
  strokeWeight(13);
 
  stroke("black");
  
 
  if (mouseIsPressed) {line(pmouseX, pmouseY, mouseX, mouseY);
  }
}