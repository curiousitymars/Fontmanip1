function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 500);
    canvas.position(560, 130);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {

}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
function draw() {
    backgorund('#6C91C2');
    textSize(difference);
    fill('#FFE787');
    text('Curiousity', 50, 400);
}