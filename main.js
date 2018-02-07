var bird
var pipes = []

function setup() {
  createCanvas(400,500)
  bird = new Bird()
  pipes.push(new Pipe())
}

function draw() {
  background(0)

  for (var i = pipes.length - 1; i >= 0; i--){
    pipes[i].show()
    pipes[i].update()

    if (pipes[i].hits(bird)){
      console.log("hit")
      textSize(32)
      stroke(0,0,0)
      text("GAME OVER PRESS F5 TO REPLAY",100,300,[230],[350])
      textAlign(CENTER);
      throw "sdf"
    }

    if (pipes[i].offscreen()){
      pipes.splice(i,1)
    }
  }

  bird.update()
  bird.show()

  if (frameCount % 30 == 0){
    pipes.push(new Pipe())
  }




}

function keyPressed(){
  if (key == ' '){
    bird.up()
  }
}
