function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500)
    canvas = createCanvas(550, 550);
    canvas.position(510, 100);
    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#902c9e");
}

function modeLoaded() {
    console.log("posenet is intialisesd");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}