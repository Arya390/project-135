status = "";

function preload() {

}

function setup() {
    canvas = createCanvas();
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
     status = document.getElementById("object_input").value;
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}