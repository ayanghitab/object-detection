img = "";
status = "";
objects = [];
function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDectector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = innerHTML = "Status : Detecting Objects";

}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
if(status !="")
{
  for (var i = 0; i < objects.length; i++) {

      document.getElementById("status").innerHTML = "Status : Object Detected";

      fill(255, 0, 0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y);
      nofill();
      stroke(55, 0, 0);
      rect(objects[i].x, objects[i].y. objects[1].width, objects[i].height);
  }  
}
   /* fill("red");
    text("Dog", 45, 75);
    noFill();
    stroke("purple");
    rect(30, 60, 450, 350);

    fill("white");
    text("cat", 320, 120);
    noFill();
    stroke("white");
    rect(300, 90, 270, 320); */
}

