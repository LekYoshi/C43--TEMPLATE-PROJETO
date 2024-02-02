var database;
var form,
  game,
  friend,
  playerCount = 0;

var gameState = 0;
var bgimg
var endImg

function preload() {
  bgimg = loadImage("background.png");
  endImg = loadImage("thankyou.png");
}

function setup() {

  canvas = createCanvas(850, 470);
  database = firebase.database();

  page = new Pages();
  page.getPage();
  form = new Form();
  friend = new Friends();
  friend.getCount();


}

function draw() {
background("background.png")
  if (gameState === 0) {
    background(bgimg);
    form.display();
  }

  if (gameState === 1) {
    clear();
    background(endimg);
    form.end();
  }
}

function windowResized() {
  resizeCanvas(w,h);
} 