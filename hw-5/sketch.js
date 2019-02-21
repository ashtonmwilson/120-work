  /**
  * This project is a cyclopse drone that alligns
  * with the mouse, whosepropellors spin at
  * different speeds based on it's position
  * on the canvas.
  */

//setting up the canvas size ( windowWidth, windowHeight) within the function setup
  function setup()  {
    createCanvas( windowWidth, windowHeight);
  }

// setting up variables for the propellors rotation
var propEvenRotation = 0;
var propEvenAngle = 0;
var propOddRotation = 0;
var propOddAngle = 0;

//setting up the draw function
function draw() {
  //redraw (white) background each frame
  background( 'rgb(256, 256, 256)');
  // remove the cursor so that the drone becomes the cursor.
  noCursor();

  //Update Values
  //even propellor rotation will be based on mouseY pos
  //add - 10 so that the propellor has a limit
  propEvenRotation = (mouseY * 0.3);
  // Have even propangle equal itself plus propRotation
  propEvenAngle = propEvenAngle + propEvenRotation;

  //Update Values
  //odd propellor rotation will be based on mouseY pos
  //add - 10 so that the propellor has a limit
  propOddRotation = (mouseX * -0.3);
  // Have odd propangle equal itself plus propRotation
  propOddAngle = propOddAngle + propOddRotation;

  //*********************
  // Drone Sandbox
  //*********************

  //have drone follow the mouse
  translate( mouseX, mouseY );

  //drone propellor one
  push();
    // move propellor one to position
    translate(-30, -30);
    // rotate drone based on mouse position
    rotate( radians(propOddAngle) );
    //propellor one
      //color
      stroke('black');
      //thickness
      strokeWeight(4);
      line (-10, 10, 10, -10);
  pop();

  //drone propellor two
  push();
    // move propellor two to position
    translate(30, -30);
    // rotate drone based on mouse position
    rotate( radians(propEvenAngle) );
    //propellor two
      //color
      stroke('black');
      //thickness
      strokeWeight(4);
      line (-10, 10, 10, -10);
  pop();

  //drone propellor three
  push();
    // move propellor three to position
    translate(30, 30);
    // rotate drone based on mouse position
    rotate( radians(propOddAngle) );
    //propellor three
      //color
      stroke('black');
      //thickness
      strokeWeight(4);
      line (-10, 10, 10, -10);
  pop();

  //drone propellor four
  push();
    // move propellor two to position
    translate(-30, 30);
    // rotate drone based on mouse position
    rotate( radians(propEvenAngle) );
    //propellor four
      //color
      stroke('black');
      //thickness
      strokeWeight(4);
      line (-10, 10, 10, -10);
  pop();

  //drone body
  push();
    //color
    fill ('black');
    // shape
    ellipse (0, 5, 25, 40);
    pop();

  //drone arms
  push();
    // arm one
      //color
      stroke('black');
      //thickness
      strokeWeight(6);
      line ( -10, -10, -30, -30);
    // arm two
      //color
      stroke('black');
      //thickness
      strokeWeight(6);
      line ( -10, 10, 30, -30);
    // arm three
      //color
      stroke('black');
      //thickness
      strokeWeight(6);
      line ( 10, 20, 30, 30);
    // arm two
      //color
      stroke('black');
      //thickness
      strokeWeight(6);
      line ( -10, 20, -30, 30);
  pop();

    // eye cause it's a cyclopse drone
  push();
    // position eye
    translate (0, 0);
    // Eye
      fill( 'rgb(238, 234, 234)');
      arc(0, 0, 15, 20, 9.25, 12.75, CHORD);
    // pupil
      fill( 'rgb(00, 00, 00)');
      arc(0, -2, 6, 8, 9.25, 12.75, CHORD);
    //

  pop();

}
