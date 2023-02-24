pdx=0;
pdy=0;
pqx=0;
pqy=0;
song1 = "";
song2 = "";
gnpqy = 0;
rdeci = 0;
gspqy = 0;

function preload(){
    song1 = loadSound("videoplayback.mp3");
    song2 = loadSound("videoplayback-_1_.mp3");
}

function setup(){
    canvas = createCanvas(600,500)
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
    image(video, 0, 0, 600, 500)
    fill("#836FFF");
    stroke("black")
    if(gspqy>0.2){
        circle(pdx,pdy,30)
        song1.play()
        song1.setVolume(1)
        song1.rate(1.0)
    }
}

function play(){

}
