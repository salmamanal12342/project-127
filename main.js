song1="";
song2="";
song1_status="";
song2_status="";
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();   
}

function draw(){
    image(video,0,0,600,600);
}


function preload(){
    song1=loadSound("song1.mp3");
    song2=loadSound("song2.mp3");
}
function play(){
    song.play();
}