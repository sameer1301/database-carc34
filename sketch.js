var ball34;
var position34;
var database;


function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    ball34 = createSprite(250,250,10,10);
    ball34.shapeColor = "red";
    
    var ballPosition = database.ref('balls/positions');
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('balls/positions').set({
        'x' : positions.x + x,
        'y' : positions.y + y,
    })
   
}

function readPosition(data){
    position34 = data.val();
    ball34.x = positions.x;
    ball34.y = positions.y;
}

function showError(){
    console.log("error in database");
}




