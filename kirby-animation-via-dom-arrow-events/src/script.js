
//1. stores kirby image:
const kirby = document.getElementById("pic"); //stores kirby image.

//2. get left & top img string px values:
let leftPx = kirby.style.getPropertyValue("left"); //gets "5px" string.
let topPx = kirby.style.getPropertyValue("top"); //gets "5px" string.

//3. parse left & top px values to integers:
let leftParsed = parseInt(leftPx); //sets "5px" string to int 5.
let topParsed = parseInt(topPx); //sets "5px" string to int 5.

//4. create eventListener for "DOMContentLoaded" on window:
let windowLoaded = window.addEventListener("DOMContentLoaded", handleContentLoaded);

//5. create function to handle "DOMContentLoaded" event:
function handleContentLoaded()
{
//6. create eventListener for "keyup" event:
  document.addEventListener("keyup", handleKeyUp);
} //end keyUpHandle() function.

//7. create function to handle "keyup" event:
function handleKeyUp(event)
{
  if(event.key == "ArrowUp") 
  {
    topParsed = topParsed - 10;
    kirby.style.setProperty("top", topParsed + "px"); 
  }
  else if(event.key == "ArrowDown")
  {
    topParsed = topParsed + 10;
    kirby.style.setProperty("top", topParsed + "px");
  }
  else if(event.key == "ArrowLeft")
  {
    leftParsed = leftParsed - 10;
    kirby.style.setProperty("left", leftParsed + "px");
  }
  else if(event.key == "ArrowRight")
  {
    leftParsed = leftParsed + 10;
    kirby.style.setProperty("left", leftParsed + "px");
  }
  
  
  if(leftParsed < -176 || leftParsed > 174 || topParsed < -26 || topParsed > 324)
  {
    kirby.style.setProperty("left", 5 + "px");
    kirby.style.setProperty("top", 125 + "px");
    alert("😂 kirby fell off the page: REFRESH page to play again. 😂");
  }
} //end handleKeyUp() function.