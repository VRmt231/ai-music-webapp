song = "";
song2 = "";
leftWristX = 0;
rightWristX = 0;
function setup() {
      canvas = createCanvas(600,500);
      canvas.center();
      video = createCapture(VIDEO)
      video.hide();
      poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on('pose',gotPoses);
 }
 function modelLoaded(){
    console.log("Nobody knew this, but poseNet will always be initialized! ")
}

 function draw(){
     image(video, 0, 0, 600, 500);
 }
  
function preload(){
    song = loadSound("I Am Astro Bot (Playroom Remi.mp3")
    song2 = loadSound("Crash Bandicoot Theme (Dubstep Remix) [-1781544649755049919].mp3 ")
    song.setVolume(1);
    song.rate(1);
    song2.setVolume(1);
    song2.rate(1);
}

function play(){
    song.play();
    song2.play();
}


function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("leftWristX - " + leftWristX + "leftWristY - " + leftWristY );
        console.log("rightWristX - " + rightWristX + "rightWristY - " + rightWristY );
        
    }
}
