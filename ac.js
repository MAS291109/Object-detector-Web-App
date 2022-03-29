status = "";
ac_image = "";

function preload(){
    ac_image = loadImage("ac.jpeg");
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
    object_Detector.detect(ac_image, gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(ac_image,0,0,640,350);
}
