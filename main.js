rightWristX="";
rightWristY="";
scoreWrist="";
function preload()
{
  img = loadImage("");
}

function setup() {
  canvas=createCanvas(600, 300);
  canvas.parent('canvas');
  video=createCapture(VIDEO);
  video.size(600,300);
  video.hide()
  
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){
  console.log("Model Loaded");
}
function gotPoses(results){
  if(results.length>0){
		console.log(results);
		rightWristX=results[0].pose.wrist.x;
		rightWristY=results[0].pose.wrist.y;
    scoreWrist=results[0].scoreWrist
	}
}
function draw(){
  if(scoreWrist>0.2){
    fill("0000FF");
    stroke("00FF00");
    circle(rightWristX, rightWristY, 6)
  }
}