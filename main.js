song1 = "";
song1 = "";

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(500,400)
    canvas.position(425, 225)
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video, 0, 0, 500, 400)

}
