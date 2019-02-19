// Function declared: setup
function setup() {
  // canvas created 1000px wide x 1000px high
  createCanvas( 500, 500);
}
  // Function declared: draw
function draw() {
  // background color set to R,G,B 66,229,224
    background( 'rgb(238,234,234)' );
    // Print text string "Self Portrait"
    // Position at ( x: 500, y: 0)
    text( "Self Portrait", 220, 20);

// Primary sandbox.
   push();
// set the grid to canvas center
  translate( 250, 250);

//arm & hand sandbox
  push();
  translate( 0, -58);
  //L hand
    stroke( 'rgb(232, 188, 192)' );
    strokeWeight( 30 );
    point( 100, 120);
  //R hand
    stroke( 'rgb(232, 188, 192)' );
    strokeWeight( 30 );
    point( -100, 120);
  //L arm
    stroke( 'rgb(79, 89, 148)');
    strokeWeight( 35 );
    line( -100, 100, -52, -26.5 );
  //R arm
    stroke( 'rgb(79, 89, 148)');
    strokeWeight( 35 );
    line( 100, 100, 52, -26.5 );
    pop();
    // arm & hand sandbox

//body sandbox
  push();
  translate( 0, -50);
  // shirt
    noStroke();
    fill( 'rgb(79, 89, 148)');
    quad(-60, -50, 60, -50, 60, 100, -60, 100);
  pop();
//body sandbox

//pants sandbox
    push();
    translate( -60, 50);
    //pants waist
    fill( 'rgb(44, 61, 85)');
    rect( 0, 0, 119, 50);
    //leg 1
    stroke( 'rgb(44, 61, 85)');
    strokeWeight( 53 );
    line( 10, 180, 30, 30 );
    //leg 2
    translate( 50, 10)
    rotate(100.2);
    stroke( 'rgb(44, 61, 85)');
    strokeWeight( 53 );
    line( 10, 180, 30, 30 );
    pop();
//pants sandbox

//head sandbox
push();
// Head shape
  noStroke();
  fill( 'rgb(232, 188, 192)');
  ellipse(0, -150, 90, 100);
// Hat
  noStroke();
  fill( 'rgb(79, 89, 148)');
  arc(0, -154, 94, 104, 9.7, 12.25, CHORD);
// Hair shape 1
  noStroke();
  fill( 'rgba(157, 114, 108, 0.7)');
  arc(0, -154, 94, 104, 9.5, 12.0, CHORD);
// Hair shape 2
  noStroke();
  fill( 'rgba(157, 116, 108, 0.5)');
  arc(0, -154, 94, 104, 9.8, 12.5, CHORD);
// Hat, cause it's winter
  noStroke();
  fill( 'rgb(79, 89, 148)');
  arc(0, -154, 98, 108, 9.7, 12.25, CHORD);
// Eyes
  fill( 'rgb(238, 234, 234)');
  arc(-20, -143, 13, 18, 9.25, 12.75, CHORD);
  arc(20, -143, 13, 18, 9.25, 12.75, CHORD);
// iris
  fill( 'rgb(44, 61, 85)');
  arc(-21, -142, 8, 10, 9.25, 12.75, CHORD);
  arc(19, -142, 8, 10, 9.25, 12.75, CHORD);
// pupil
  fill( 'rgb(00, 00, 00)');
  arc(-21, -141, 4, 5, 9.25, 12.75, CHORD);
  arc(19, -141, 4, 5, 9.25, 12.75, CHORD);
// smile
  stroke( 'rgb(00, 00, 00)');
  arc(0, -120, 8, 10, 12.75, 9.25, CHORD);
// neck
  noStroke();
  fill( 'rgb(232, 188, 192)');
  triangle(-22, -110, 22, -110, 0, -60);
pop();
//head sandbox

pop();
//Primary Sandbox

}
