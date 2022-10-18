    //variables
    var fondo,barco;
    var fondoImage,barco_running;

function preload(){
    
    //cargar las imagenes
    fondoImage=loadImage("sea.png");
    barco_running=loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
    createCanvas(500,400);

    //fondo
    fondo = createSprite(200,180,400,20);
    fondo.addImage(fondoImage);
    fondo.x=fondo.width/2;

    //barco
    barco = createSprite(130,255,30,30);
    barco.addAnimation("movingBarco",barco_running);
    barco.scale=0.25;
}

function draw() {
    background("blue");
    
    //darle velocidad al fondo
    fondo.velocityX=-3;

    //hacer que el fondo se repita
    if(fondo.x<0){
    fondo.x=fondo.width/2}

    drawSprites() ;
}








