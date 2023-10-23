let emitters = [];



function setup() {
  createCanvas(1100, 1100);
  
  emitters = new Emitter(width/2, height/2);
  
  
}

function draw() {
  
  background(1);
  
  emitters.emitAdd(1);
  emitters.emitDisplay();
  emitters.emitUpdate();
  
  let force = createVector(0, -0.1);
  emitters.emitApplyForce(force);

  let dir = map(mouseX, 0, width, -0.1, 0.1);
  let wind = createVector(dir, 0);
  emitters.emitApplyForce(wind);



}

