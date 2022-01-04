song = "";
song2 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
score_LeftWrist = 0;
score_RightWrist = 0;
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
       song_status = song.isPlaying();
       song2_status = song2.isPlaying();
       fill(#FF0000);
       stroke(#FF0000);
       if(score_RightWrist > 0.2){
           circle(rightWristX,rightWristY,20);
             song2.stop();
             if(song_status == false){
                   song.play
                   document.getElementbyId("song").innerHTML = "Playing - I am Astro Bot (Playroom Remix)" 
             }
       }
        if(score_LeftWrist > 0.2){
           circle(lefttWristX,leftWristY,20);
             song.stop();
             if(song2_status == false){
                   song2.play
                   document.getElementbyId("song").innerHTML = "Playing - Crash Bandicoot Theme (Dubstep Remix)" 
             }
       }
      
 }
  
function preload(){
    song = loadSound("I Am Astro Bot (Playroom Remix).mp3")
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

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        score_LeftWrist = results[0].pose.keypoints[9].score;
        score_RightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist = " + score_LeftWrist);
        console.log("scoreRightWrist = " + score_RightWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX - " + leftWristX + "leftWristY - " + leftWristY);
        console.log("rightWristX - " + rightWristX + "rightWristY - " + rightWristY);

        
    }
}
