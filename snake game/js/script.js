const canvas = document.querySelector(".canvas");
const cntx = canvas.getContext("2d");


console.log(cntx)

const scale = 15;
const row = canvas.width/scale;
const column = canvas.height/scale;

let snake = [];
snake[0] = {
    x: (Math.floor(Math.random()*column))*scale,

    y: (Math.floor(Math.random()*row))*scale ,


}

let food = {
  x: (Math.floor(Math.random()*column))*scale,

  y: (Math.floor(Math.random()*row))*scale ,


}


let d = "right";
let playgame = setInterval(draw, 160);

function draw(){
cntx.clearRect(0, 0, canvas.width, canvas.height)
for(let i = 0; i<snake.length; i++){
cntx.fillStyle = "#fff";
cntx.strokeStyle = "pink";
cntx.fillRect(snake[i].x, snake[i].y, scale, scale);
cntx.strokeRect(snake[i].x, snake[i].y, scale, scale)
}

cntx.fillStyle = "#ff0";
cntx.strokeStyle = "pink";
cntx.fillRect(food.x, food.y, scale, scale);
cntx.strokeRect(food.x, food.y, scale, scale)


let snakeX = snake[0].x;
let snakeY = snake[0].y;
// console.log(snake)
if (d == "left") snakeX = snakeX-scale;
if(d == "up") snakeY = snakeY-scale;
if(d == "right") snakeX = snakeX+scale;
if(d == "down") snakeY = snakeY+scale;

if(snakeX > canvas.width){
    snakeX = 0;
}

if (snakeY > canvas.height){
    snakeY = 0;
}
if(snakeX <0){
    snakeX = canvas.width
}
if(snakeY < 0){
    snakeY = canvas.height
}
if(snakeX == food.x && snakeY == food.y){

food = {
  x: (Math.floor(Math.random()*column))*scale,

  y: (Math.floor(Math.random()*row))*scale ,


}

}
else{

snake.pop()
}


let newHead = {
     x:snakeX,
     y:snakeY
}
snake.unshift(newHead);

if(eatSelf(newHead, snake)){
    clearInterval(playgame);
}



}

document.addEventListener("keydown", function(event){
if(event.key === "ArrowLeft" && d!="right"){
    d = "left"
}
else if (event.key === "ArrowUp" && d != "down"){
    d = "up"
}
else if(event.key === "ArrowRight" && d!= "left"){
    d = "right"
}
else if(event.key === "ArrowDown" && d!="up" ){
    d="down"
}
})

function eatSelf(head, array){
    for(let i = 0; i<array.length; i++)
    if(head.x == array[i] && head.y == array[i] ){
        return true;
    }
    else{
        return false;
    }
}


