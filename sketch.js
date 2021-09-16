
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  //  code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(RIGHT_ARROW))
  {
    background("red")

  }
//  code to change background color to red when right arrow is pressed
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 //code to change background color to blue when left arrow is pressed
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }
//code to change background color to yellow when up arrow is pressed
  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }
//code to change background color to green when down arrow is pressed

  
 drawSprites();

}
