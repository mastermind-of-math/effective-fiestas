songa = "";
songb = "";

function preload(){
    songa = loadSound("music.mp3");
    songb = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('poses', gotResults)
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function modelLoaded(){
    console.log("Model Has Loaded!");
}

function gotResults(results){
    if(results.length > 0){
        result = results[0].pose
        leftX = result.leftWrist.x;
        leftY = result.leftWrist.y;
        rightX = result.rightWrist.x;
        rightY = result.rightWrist.y;
        console.log("Left Wrist X" + leftX + "\nLeft Wrist Y" + leftY + "\nRight Wrist X" + rightX + "\nRight Wrist Y" + rightY);
    }
}