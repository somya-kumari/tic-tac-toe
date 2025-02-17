console.log("Welcome to TicTacToe")

let turn="X";
let gameover=false;
//function to change the turn
const changeTurn = ()=>{
    return turn==="X"?"0":"X"
}

//function to check for a win
const checkWin = ()=>{
    let boxtexts=document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[1]].innerText!=='')){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText + " has won"
            gameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="400px";
            // document.querySelector(".line").style.width="20vw";
            // document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn=changeTurn();
            checkWin();
            if(!gameover)
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})

//add onclick listener to reset button
reset.addEventListener('click', (e)=>{
    let boxtextss=document.querySelectorAll('.boxText');
    Array.from(boxtextss).forEach(element => {
        element.innerText=""
    });
    turn="X";
    // document.querySelector(".line").style.width="0vw";
    gameover=false;
    if(!gameover)
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})
