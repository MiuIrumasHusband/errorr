 var mymainmanjaxon, jaxonimage
function preload(){
  mymainmanjaxon = loadImage ("Runner-1.png")
  jaxonimage = loadAnimation ("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  mymainmanjaxon = createSprite (200,200)
  mymainmanjaxon.loadAnimation (jaxonimage)
  mymainmanjaxon.scale = 0.4
}

function draw() {
  background(0);
  var path = createSprite (200,200);
  path.addImage(path.png);
  path.velocityY = 4;
  path.scale = 1.2;

  if (path.y > 400) {
  path.y = height/2;
}
}
