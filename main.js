video = "";

function preload(){
    video = createVideo('video titanic.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoad);
    document.getElementById("status").innerHTML = "Estado: Detectando objetos";
}

function modelLoad() {
    console.log("¡Modelo cargado!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}