status = "";
remote_image = "";

function preload(){
    remote_image = loadImage("remote.jpeg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,215);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(remote_image, gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(remote_image,0,0,640,350);
}
