song = "";
song2 = "";
function setup() {
     canvas = createCanvas(600,500);
     canvas.center();
    video = createCapture(VIDEO)
    video.hide();
 }

 function draw(){
     image(video, 0, 0, 600, 500);
 }
  
function preload(){
    song = loadSound("I Am Astro Bot (Playroom Remix).mp3")
    song2 = loadSound("Crash Bandicoot Theme (Dubstep Remix) [-1781544649755049919].mp3 ")
}

function play(){
    song.play();
    song2.play();
}