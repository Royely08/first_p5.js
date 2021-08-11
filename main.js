function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    circle(40,40,40)
    rect(60,30,400,20)
    circle(450,40,40)
    rect(440,60,20,300)
    circle(450,350,40)
    rect(60,345,370,20)
    circle(40,350,40)
    rect(30,60,20,270)

    image(video,150,100,200,200);
    tint(tint_color);
}

function take_snapshot(){
    save('Lakshna.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}