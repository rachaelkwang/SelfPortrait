function setup() {

  createCanvas(1000, 1000);
  
  background('#d7f8ff');
  
  
  //hair 
  
  fill('#2c0033');
  triangle(276, 664, 265, 1000, 172, 1000);
  rect(299, 531, 245, 468); 
  
  //body
  fill('#ffddf8'); 
  rect(324, 664, 212, 335);
  
  //head shape
  beginShape();
  
  fill('#ffedd0');
  
  vertex(379, 373);
  vertex(494, 373);
  vertex(551, 444); 
  vertex(542, 553);
  vertex(500, 634);
  vertex(474, 665);
  vertex(404, 665);
  vertex(367, 612);
  vertex(327, 533);
  vertex(334, 456);
  vertex(379, 373);
  endShape();
  
  //hair 
  beginShape();
  
  fill('#3c004c');
  vertex(566, 1000);
  vertex(580, 743);
  vertex(627, 560);
  vertex(620, 446);
  vertex(519, 343);
  vertex(417, 336);
  vertex(314, 373);
  vertex(273, 500);
  vertex(257, 1000);
  vertex(304, 1000);
  vertex(328, 675);
  vertex(340, 469);
  vertex(402, 448); 
  vertex(417, 400); 
  vertex(417, 389); 
  vertex(437, 391); 
  vertex(528, 483); 
  vertex(539, 573); 
  vertex(519, 1000); 
  
  endShape();
  
  fill('#2e0000');;
  circle(379, 516, 30);
  circle(491, 516, 30); 
  
  stroke('black');
  strokeWeight(3);
  line(458, 555, 406, 556);
  line(486, 472, 510, 494);
  line(369, 475, 349, 494);
  
}


function draw() {

}
