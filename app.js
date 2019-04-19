const player1 = "fa-circle";
const player2 = "fa-times";
let round = 1;
var pl1 = [];
var pl2 = [];
var clicked = [];
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const board = [... document.querySelectorAll('.field')];

board.forEach((filed)=>{
    filed.addEventListener('click',clickedfield)
});

function clickedfield(event){
    let index = board.indexOf(event.target); 
    if(!clicked.includes(index)){
        clicked.push(index);
        let currentField = event.target;  
        player = (round%2 == 0) ? player2: player1;
        player==player2?pl2.push(index):pl1.push(index);
        currentField.classList.add(player);
        round++;
        if(pl2.length>=3) if(iswin(pl2)){stop("krzyżyk"); /*alert("Zwyciężył krzyżyk");*/}
        if(pl1.length>=3) if(iswin(pl1)){stop("kółko"); /*alert("Zwycieżyło kółko");*/}
    }  
}
function iswin(array){
    isequal = Boolean(true);
    for(let i=0;i<=7;i++){
        isequal=true;
        for(let j=0;j<=2;j++)if(!array.includes(win[i][j])) isequal=false;  
        if(isequal) return isequal;
    }
}
function newgame(){
    location.reload();
}
function stop(zmienna){
    for(let i=0;i<9;i++){
        if(!clicked.includes(i)) clicked.push(i);
    }
    document.getElementById("p1").innerHTML="Wygrywa "+ zmienna +"!";

    var a = document.getElementById("winnerboard");
    var img = document.createElement("img");
    img.src = "confetti.png";
    a.appendChild(img);

    var btn = document.createElement("button");
    btn.innerHTML = "Nowa gra !";
    btn.onclick =  newgame;
    document.getElementById("button").appendChild(btn);
}