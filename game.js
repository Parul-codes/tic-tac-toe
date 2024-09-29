let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let win = document.querySelector(".win");
let newBtn = document.querySelector("#newgame");
let container = document.querySelector(".contain")

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box)=> {
    reset.addEventListener("click",()=>{
        box.innerText = ""
        win.innerText = "";
        box.disabled = false;
    });
});

boxes.forEach((box)=> {
    newBtn.addEventListener("click",()=>{
        box.innerText = ""
        win.innerText = "";
        box.disabled = false;
        container.classList.add("hide");
    });
});

boxes.forEach((box)=> {
    box.addEventListener("click", () => {
        if(turnO) { //playerO
            box.innerText = "O"
            turnO = false;
        } else { //playerX
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
 
const showWinner = (winner) => {
    win.innerText = `CONGRATULATIONS! WINNER IS ${winner}`;
    newBtn.classList.remove("hide");
    newBtn.innerText = "New Game?";
};

const checkWinner = ()=>{
    for(let patterns of winPatterns) {
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                container.classList.remove("hide");
            }
        }
    }
};


