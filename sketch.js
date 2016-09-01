function setup() {
  createCanvas(400,269);
  background(249,197,23);
}
  /*
      colors:
      red———————color(171,1,1);
      yellow———————color(249,197,23);
      brown———————color(4,2,5);
  */
function draw (){
  noLoop();

  noStroke();
  fill(171,1,1);
  rect(0,144,400,124);

  fill(4,2,5);
  rect(0,144,400,8);

  fill(4,2,5);
  rect(0,176,400,8);

  fill(4,2,5);
  rect(0,207,400,9);

for(i=2; i<=400; i+=4){
  for(j=2;i<=270;j+=4){
    noStroke();
    fill(4,2,5);
    ellipse(j,i,2);
  }
}
}
