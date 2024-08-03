let boxes = document.querySelectorAll('.box');
let reset = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".newgame");
let newcontainer = document.querySelector(".new");

let turnO = true;
let count = 0;
const winpattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        }
        else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});

const result = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    newcontainer.classList.remove("hide");
    for(let box of boxes)
        box.disabled = true;
 }

const checkWinner = () => {
  for(let pattern of winpattern)
  {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;
    if(p1!="" && p2!="" && p3!="")
    {
        if(p1==p2 && p1==p3)
            setTimeout(()=>{
            result(p1);
            },1000);
    }
    if(count == 9)
        setTimeout(()=>{
            draw();
            },1000);;
  }
}

newGame.addEventListener('click',() =>{
    for(let box of boxes)
    box.innerText = "";
    newcontainer.classList.add("hide");
    count = 0;
    box.disabled = false;
})

reset.addEventListener('click',() =>{
    for(let box of boxes)
    box.innerText = "";
    count = 0;
    box.disabled = false;
})

const draw = () => {
    msg.innerText = `Draw Game!`;
    newcontainer.classList.remove("hide");
}

