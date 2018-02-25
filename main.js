var bird
var pipes = []

const states = ["gameplay","death","start"]

let currentState = "gameplay"

function setup() {
  createCanvas(400,500)
  bird = new Bird()
  pipes.push(new Pipe())
}

function restart(){
  pipes = []
}

function draw() {
  background(0)
  if (currentState == "gameplay"){
    for (var i = pipes.length - 1; i >= 0; i--){
      pipes[i].show()
      pipes[i].update()

      if (pipes[i].hits(bird)){
        currentState = "death"
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

  if (currentState == "death"){
    console.log("hit")
    textSize(32)
    stroke(0,0,0)
    text("GAME OVER PRESS SPACE TO REPLAY \n \n YOUR SCORE: testhere",100,100,[210],[350])
    textAlign(CENTER, TOP);

  }





}

function keyPressed(){
  if (key == ' '){
    if (currentState == "gameplay"){
      bird.up()
    }
    if (currentState == "death"){
      currentState = "gameplay"
      restart()
    }
  }
}
