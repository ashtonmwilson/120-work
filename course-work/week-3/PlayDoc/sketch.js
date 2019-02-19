// Function declared: setup
function setup() {

  // canvas created 2000px wide x 1000px high
  createCanvas(200, 200);

  // background color set to R,G,B 66,229,224
    background(66,239,224);
   }
   // Function declared: draw
function draw() {
  translate(5,2);

// Creating a graph of dots for testing the arc function
  point(30, 20);
  point(60, 20);
  point(90, 20);
  point(120, 20);
  point(150, 20);
  point(180, 20);
  point(30, 50);
  point(60, 50);
  point(90, 50);
  point(120, 50);
  point(150, 50);
  point(180, 50);
  point(30, 80);
  point(60, 80);
  point(90, 80);
  point(120, 80);
  point(150, 80);
  point(180, 80);
  point(30, 110);
  point(60, 110);
  point(90, 110);
  point(120, 110);
  point(150, 110);
  point(180, 110);
  point(30, 140);
  point(60, 140);
  point(90, 140);
  point(120, 140);
  point(150, 140);
  point(180, 140);


// fill color command
fill('rgba(255, 245, 23, 0.2)');
  arc(90, 110, 30, 30, radians(180), HALF_PI, CHORD);


// Print text string "Hello World!"
// Position at ( x: 100, y: 5)
text( "Hello World!", 1000, 500);
}
