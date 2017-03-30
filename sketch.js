var x = 300;
var y = 200;

function setup(){
    createCanvas(600,400);
    background(50);
}

function draw(){
    rose(300,200);
    rose(100,300);
    rose(200,300);
    rose(300,300);
    rose(400,300);
    rose(500,300);
    
   if(mouseIsPressed){
    rose(mouseX,mouseY);
   }
}

function rose(x,y){
  
    //stem
    fill(25,150,50);
    rect(x-5,y,10,100);
    
    //petals
    noStroke();
    fill(150,150,150);
    ellipse(x+10,y-10,35,35);
    fill(255,50,100);
    ellipse(x+10,y+10,35,35);
    fill(255,150,200);
    ellipse(x-10,y-10,35,35);
    fill(150,100,150)
    ellipse(x-10,y+10,35,35);
    
    
    
    
      //bulb 
    fill(255,200,0);
    ellipse(x,y,30,30);
    
}
    