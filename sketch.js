var canvas;
var music;
var box1,box2,box3,box4,ball;
var edge;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(0,580,360,30);
    box1.shapeColor="red";
    box2 = createSprite(295,580,200,30);
    box2.shapeColor="green";
    box3 = createSprite(515,580,200,30);
    box3.shapeColor="yellow";
    box4 = createSprite(740,580,200,30);
    box4.shapeColor="blue";
    ball = createSprite(random(200,750),100,40,40);
    ball.shapeColor="black";
    ball.velocityX=4;
    ball.velocityY=4;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    

    //create edgeSprite
    edge=createEdgeSprites();
    ball.bounceOff(edge);
    if(ball.isTouching(box1)){
        ball.bounceOff(box1);
        music.play();
        box1.shapeColor="orange";
    }
    
    if(ball.isTouching(box2)){
        ball.bounceOff(box2);
        music.play();
        box2.shapeColor="pink";
    }
    if(ball.isTouching(box3)){
        ball.bounceOff(box3);
        music.play();
        box3.shapeColor="green";
    }
    if(ball.isTouching(box4)){
        ball.bounceOff(box4);
        music.play();
        box4.shapeColor="red";
    }
     drawSprites();
    //add condition to check if box touching surface and make it box
}
