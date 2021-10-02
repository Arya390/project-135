status = "";
results = [];
objects = [];

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
    if(status != "")
    {
        for(i = 0; i < objects.length; i++) {
            fill("#FF0000");
            percent = floor(objects[i].confidenc * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
     results = document.getElementById("object_input").value;
     if(results == objects)
     {
         video.stop();
         objectDetector.detect(gotResults);
         document.getElementById("status").innerHTML = "Status : Object Mentioned Found";
         var synth = window.speechSynthesis;
         function SpeechSynthesisUtterance()
         {
             var utterThis = new SpeechSynthesisUtterance(results);
             speak(utterThis);
         }
         }
         else {
            document.getElementById("status").innerHTML = "Status: Object Mentione Not Found";
     }
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResults(error, results)
{
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
