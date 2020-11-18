var bullet,speed,weight
var wall, thickness
var background1








function setup() {
  createCanvas(1600,400);
wall = createSprite(1200,200,thickness,height/2)  
wall.shapeColor=(80,80,80)

bullet = createSprite(100,120,50,10)
bullet.shapeColor = "white"


background1 = createSprite(800,100,1600,400)
background1.shapeColor=(0)


thickness = random(22,83)
speed = random(223,321)
weight = random(30,52)


bullet.velocityX = speed


}

function draw() {
  background(255,255,255);  
bullet.depth = background1.depth
bullet.depth = bullet.depth+1 
wall.depth = bullet.depth



if(bullet.isTouching(wall)){
  bullet.velocityX = 0
  bullet.x = wall.x - 75



damage = 0.5*weight*speed*speed/thickness*3
if(damage >10){
  bullet.shapeColor = "red"
}
if(damage<10 ){
  bullet.shapeColor = "green"

}

text(damage,200,100)

text(speed,200,150)

text(weight,200,170)

text(thickness,200,180)
text.fill = "white"


}


  drawSprites();
}