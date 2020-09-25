<p align="center">
  <img src="https://github.com/camillemonet/images/blob/master/js_home.png" />
</p>

Nurses vs Nonsense is a game which encourages players to stop individuals from shopping in stores without masks.
By placing strategic obstacles such as: 

 * Nurses who throw masks
 * Scientists who provide more game health
 * Newspapers which temporarily stop the anti-maskers
 * Sanitizer which causes people within the immediate vicinity to leave
 
 Players are tasked with protecting the store and minimizing the spread of COVID.  JavaScript, HTML Canvas, and CSS were used to display the game and carry out the game logic.
 
 ### Link to live site:
 https://camillemonet.github.io/Nurses-vs-Nonsense/
 
 ![Game Gif](https://github.com/camillemonet/images/blob/master/js_gif.gif)
 
 ### How it Works
 
 #### 1. Animation Loop
 
 In order to properly animate the game, two canvases were used. One was necessary for creating the hover effects and onclick event handlers, while another was layered behind it to create the animations. Due to the fact that the clearing intervals were different for each canvas, they had to be separated out in this fashion. An example of the code used to render an animation within the drawing loop on the board is shown below: 
 
  ```javascript
  that.ctxA.drawImage(imageObj.image, imageObj.shift, 0, imageObj.frameWidth, imageObj.frameHeight, imageObj.xi, imageObj.yi, imageObj.frameWidth, imageObj.frameHeight)
  imageObj.shift += imageObj.frameWidth + 1;
  ```
 
 #### 2. Collision Detection
 
 A major method of defending the store is comprised of strategically placing nurses who throw masks to stop the onslaught of shoppers. Therefore, it is important to detect the collision of different animated objects and react accordingly. An example of this collision detection is shown below:
 
 ```javascript
 if(obj1.item === "mask" && obj2.item === "karen") {
  if(obj1.xi > (obj2.xi - obj2.frameWidth/2 + 10) && obj1.xi < (obj2.xi + obj2.frameWidth/2 - 10) 
  && obj1.yi < (obj2.yi + obj2.frameHeight*3/4) && obj1.yi > obj2.yi ) {
    obj1.item = "null";
    obj1.active = false;
    obj1.square = [0, 0];
    obj2.maskCounter += 1;
    if (obj2.maskCounter === 6) {
      obj2.item = "null";
      obj2.active = false;
      obj2.square = [0, 0];
    }
  }
}
 ```
 
 In the above example, when a mask collides with a character, the following actions are taken: 
 * The mask is removed from the canvas and set to inactive
 * The character's counter of collided masks is incremented
 * If the character's counter of collided masks is six, the character is set to inactive and removed from the board
 
 ### Future Features
 * Saving of high scores
 * Level differentiation
 * Additional defense objects
 * Alternative maps/backgrounds
