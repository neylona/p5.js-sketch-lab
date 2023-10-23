// Particle System 
class Particle {

  constructor(x, y) {
    this.position = createVector(x, y);
    // Speed and Direction 
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0);
    this.lifetime = 255;
   
    // Size and Color
    this.size = random(8,24);
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255);

    // Force
    
  }

finished() {
  return this.lifetime < 0;

}


update() {
  this.position.add(this.velocity);
  this.velocity.add(this.acceleration);
  this.lifetime -= 0.5;
  this.acceleration.set(0,0);
  // Size Update
  if (this.size > 0) {
  this.size +=  -0.1;
  } else {
    this.size +=  0;
  } 
}

display() {
  noStroke();
  fill(this.r, this.g, this.b, this.lifetime)
  circle(this.position.x, this.position.y, this.size, this.size);
}

applyForce(force) {
  this.acceleration.add(force);
}


}
// Emitter

class Emitter {

  constructor(emitX, emitY) {
    this.position = createVector(emitX, emitY);
    this.particles = [];
  }

emitAdd(vol) {
  // Push Particle {} to particles []
  for (let i =0; i < vol; i++) { 
    let ps = new Particle(this.position.x, this.position.y);
    this.particles.push(ps);
    }
}

emitUpdate() {
for (let p of this.particles) {
    p.update();
}
      //--------- Remove particles in the correct order (look backward and Delete)
    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].finished()) {
       this.particles.splice(i, 1);
      }
    }
  }

emitDisplay() {
  for (let p of this.particles) {
    p.display();
    }
  }

emitApplyForce(force) {
  for (let p of this.particles) {
    p.applyForce(force);
  }
}

}