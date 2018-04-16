var bird
var pipes = []

const states = ["gameplay","death","start"]

let currentState = "start"

score = 0

function setup() {
  createCanvas(400,500)
  bird = new Bird()
  pipes.push(new Pipe())
}

function restart(){
  pipes = []
  score = 0
}

function draw() {
  background(0)
  if (currentState == "gameplay"){
    for (var i = pipes.length - 1; i >= 0; i--){
      pipes[i].show()
      pipes[i].update()

      if (pipes[i].hits(bird)){

      }

      if (pipes[i].birdPass(bird)){
        score++
        console.log(score)
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

  else if (currentState == "death"){
    textSize(32)
    stroke(0,0,0)
    text("GAME OVER PRESS SPACE TO REPLAY \n \n YOUR SCORE:"+score,100,100,[210],[350])
    textAlign(CENTER, TOP);
  }

  else if (currentState == "start") {
    textSize(32)
    stroke(0,0,0)
    text("hi",100,100,[210],[350])
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
    if (currentState == "start"){
      currentState = "gameplay"
      restart()
    }
  }
}
