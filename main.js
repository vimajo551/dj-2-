pdx=0;
pdy=0;
pqx=0;
pqy=0;
song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("videoplayback.mp3");
    song2 = loadSound("videoplayback-_1_.mp3");
}

function setup(){
    canvas = createCanvas(500,400)
    canvas.position(425, 225)
    video = createCapture(VIDEO);
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        pdx=results[0].pose.rightWrist.x
        pdy=results[0].pose.rightWrist.y
        pqx=results[0].pose.leftWrist.x
        pqy=results[0].pose.leftWrist.y
    }
}

function modelLoaded(){
    console.log("carregado")
}

function draw(){
    image(video, 0, 0, 500, 400)
    circle(pdx,pdy,30)
}

function play(){

}
