var wall,bullet;
var speed,weight,thickness;

function setup() {
    
 createCanvas(1600,400);

 speed=random(55,90);
 weight=random(400,1500);
 thickness=random(22,83);

 wall=createSprite(1200,200,thickness,height/2);

 bullet=createSprite(200,200,60,30);
 bullet.velocityX=speed;

}

function draw() {

 background("black"); 

    if(hasCollided(wall,bullet)===true){

        bullet.velocityX=0;
        
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
            if(damage>10){
                wall.shapeColor="red";
            }

            if(damage<10){
                wall.shapeColor="green";
            }


     } 
    

 drawSprites();

}

function hasCollided(wall,bullet){

    if(wall.x-bullet.x<wall.width/2+bullet.width/2)
        {
       return true;
        }
else
        {
       return false;
        }
    } 
    
    


        
