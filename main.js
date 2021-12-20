noseX=0;
noseY=0;
difference=0;
rightWrist=0;
leftWrist=0;

function setup(){

    video=createCapture(VIDEO);
    video.size(600,600);

    canvas=createCanvas(700,500);
    canvas.position(650,125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
    
}

function modelLoaded(){
    console.log("This Model Is Loaded ");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}