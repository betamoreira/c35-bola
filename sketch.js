var bola, pos, bolaPosicao;
var database;

function setup(){ 
  database = firebase.database();

  createCanvas(500,500);

  bola = createSprite(250,250,10,10);
  bola.shapeColor = "red";

  bolaPosicao = database.ref("ball/position");
  bolaPosicao.on("value", lerBanco);

}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
     moverBola(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      moverBola(5,0);
    }
    else if(keyDown(UP_ARROW)){
      moverBola(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
      moverBola(0,5);
    }
    drawSprites();
  
}

function moverBola(x1,y1){
  bola.x = bola.x + x1;
  bola.y = bola.y + y1;
}

function lerBanco(data){
  pos = data.val();
  bola.x = pos.x;
  bola.y = pos.y;
}

