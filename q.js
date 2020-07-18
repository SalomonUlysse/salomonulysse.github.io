//x & y positions for moving.

var c=document.getElementById("canvas");
var context=c.getContext("2d");
var step=30;//How many pixels the image moves per redraw. 

//For movement
var x=0;
var y=0;

//For animation
/*
left:   sx[0] 
up:     sx[1]
right:  sx[2]
down:   sx[3]
*/
var sx=new Array(4); //Source x array for the 4 directions
sx[0]=0;
sx[1]=1020; //Have to start here for the up sprite strip
sx[2]=0;
sx[3]=0;
var sy=new Array(4); //Source y for 

var height=300;
var width=230;
var reset=0; //Supposed to clear setInterval().

var img=document.getElementById("sheet");//New image object & connecting the source
context.drawImage(img,0,0,img.width/8.7,img.height/3.5,x,y,width,height);


//The skeleton stops and faces me when the keyboard button is lifted.
function stop()
{
    context.clearRect(0,0,c.width,c.height);
    context.drawImage(img,sx[3],0,img.width/9,img.height/3.5,x,y,width,height);
}//End stop
//Making sure the document uses the appropriate functions.

document.onkeydown=walk; //When I press my key, my sprite moves.
document.onkeyup=stop;
function walk(e)
{

    switch(e.keyCode)
    {
    
        //If the user presses left...
        case 37: case 65:
        {
            //console.log("Pressing left! (%d,%d):", x, y);

            //If my x value is greater than the minimum width, moving is allowed.
            if(x>0)
            {      
                x-=step;
                context.clearRect(0,0,c.width,c.height);//Clear previous image
                context.drawImage(img,sx[0],2.05*(img.height/3.3),img.width/11.5,img.height/3.3,x,y,width/1.5,height);//Draw image with updated position
            }//End if

                //Animate regardless of the border
                if(sx[0]<480)
                {
                    sx[0]+=180;
                    context.clearRect(0,0,c.width,c.height);//Clear previous image
                    context.drawImage(img,sx[0],2.05*(img.height/3.3),img.width/11.5,img.height/3.3,x,y,width/1.5,height);//Draw image with updated position
                }//End inner if
                else //If I exceed my reach the end of the sprite strip, reset
                {
                    sx[0]=0;
                }//End else

            break;
        }//End case 37
        
        //If the user presses up...
        case 38: case 87:
        {
            
            // console.log("Pressing up! (%d,%d):", x, y);
            // console.log("sx[1]! %d:", sx[1]);
            // console.log("img.width is %d", img.width);

            //If my y value is greater than the minimum height, moving is allowed.
            if(y>0)
            {
                y-=step;
                context.clearRect(0,0,c.width,c.height);//Clear previous image
                context.drawImage(img,sx[1],0,img.width/9,img.height/3.5,x,y,width,height);//Draw image with updated position                    
            }//End if
            
            //Animate regardless of the border
            if(sx[1]<1740)    
            {
                sx[1]+=240;
                context.clearRect(0,0,c.width,c.height);//Clear previous image
                context.drawImage(img,sx[1],0,img.width/9,img.height/3.5,x,y,width,height);//Draw image with updated position
            }//End inner if
            else //If I exceed my reach the end of the sprite strip, reset
            {
                sx[1]=1020;
            }//End else

            break;
        }//End 38

        //If the user presses right...
        case 39: case 68:
        {
            // console.log("Pressing right! (%d,%d):", x, y);
            // console.log("sx[2]! %d:", sx[2]);
            // console.log("img.width is %d", img.width);

            //If my x value is less than the max width - sprite width, moving is allowed.
            if(x<(c.width-width))     
            {   

                x+=step;
                context.clearRect(0,0,c.width,c.height);//Clear previous image
                context.drawImage(img,sx[2],img.height/3.3,img.width/11.5,img.height/3.5,x,y,width/1.5,height);//Draw image with updated position
                
            }//End if

                //Animate regardless of the border
                if(sx[2]<480)
                {
                    sx[2]+=175;
                    context.clearRect(0,0,c.width,c.height);//Clear previous image
                    context.drawImage(img,sx[2],img.height/3.3,img.width/11.3,img.height/3.5,x,y,width/1.5,height);//Draw image with updated position
                }//End inner if
                else //If I exceed my reach the end of the sprite strip, reset
                {
                    sx[2]=0;
                }//End else            

            
            break;
        }//End case 39
        
        //If the user presses down...
        case 40: case 83:
        {
            
            // console.log("Pressing down! (%d,%d):", x, y);
            // console.log("sx[3]! %d:", sx[3]);
            // console.log("img.width is %d", img.width);

            //If my y value is less than the max height-sprite height, moving is allowed.
            if(y<(c.height-height))
            {
                //If my source x is less than my sprite width, go to the next sprite. 

                y+=step;
                context.clearRect(0,0,c.width,c.height);//Clear previous image
                context.drawImage(img,sx[3],0,img.width/9,img.height/3.5,x,y,width,height);//Draw image with updated position
                
            }//End if
            
            //Animate regardless of the border
            if(sx[3]<720)    
            {
                sx[3]+=240;
                context.clearRect(0,0,c.width,c.height);//Clear previous image
                context.drawImage(img,sx[3],0,img.width/9,img.height/3.5,x,y,width,height);//Draw image with updated position
            }//End inner if
            else //If I exceed my reach the end of the sprite strip, reset
            {
                sx[3]=0;
            }//End else
            
            break;
        }//End case 40

        
        default:
            {
            //console.log("Nothing...");

            //When I let go of my key, my sprite stops.
            break;
            }//End default

    }//End switch

}//End move