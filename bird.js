function Bird(){
  this.y = width/2
  this.x = 70

  this.gravity = 1.1
  this.velocity = 0
  this.lift = -20

  this.show = function() {
    fill(255)
    ellipse(this.x,this.y,24,24)
  }

  this.update = function(){
    this.velocity += this.gravity
    this.velocity *= 0.9
    this.y += this.velocity
    if (this.y > height){
      this.y = height
      this.velocity = 0
    }
  }

  this.up = function(){
    this.velocity += this.lift
  }
}
