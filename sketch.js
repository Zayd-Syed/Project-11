
function preload(){
  seaImg = loadImage('sea.png');
  shipImg1 = loadAnimation('ship-1.png',"ship-2.png","ship-3.png","ship-4.png");
  
  
  }


function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);

  ship = createSprite(130,250,30,30);
  ship.addAnimation("sail",shipImg1);
  ship.scale = 0.30;
  
}

function draw() {
  background("blue");
  sea.velocityX = -5
  
  if (sea.x < 0) {
    sea.x = sea.width/2;
  }
 
  drawSprites();
}

 