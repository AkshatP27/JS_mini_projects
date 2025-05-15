const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#resetBtn');
const newBtn = document.querySelector('#newGameBtn');
const msgCont = document.querySelector('.msg-container');
const msg = document.querySelector('#msg');

let turnO = true;

// Array of Winning Patterns
const winPatrns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],   //=>Horizontal Win Patterns
    [0, 3, 6], [1, 4, 7], [2, 5, 8],   //=>Vertical Win Patterns
    [0, 4, 8], [2, 4, 6]               //=>Diagonal Win Patterns
]

// Code to display X/O on click
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log("Clicked");
        if(turnO){
            box.innerText = 'O';
            box.style.color = '#00296b';
            turnO = false;
        }else{
            box.innerText = 'X';
            box.style.color = '#10002b';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

// Function to check winner of the game
const checkWinner = () => {
    for (let pattern of winPatrns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                // console.log(`Player ${pos1} wins!`);
                boxes[pattern[0]].style.backgroundColor = '#38b000';
                boxes[pattern[1]].style.backgroundColor = '#38b000';   
                boxes[pattern[2]].style.backgroundColor = '#38b000';
                disableBtns();
                showWinner(pos1);
            }
        }

        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
    }
}

// Function to display winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Player ${winner} won!`;
    msgCont.classList.remove('hidden');
}

// Functions to disable buttons after winner is declared
const disableBtns = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

// Function to enable buttons & reset game after clicking reset game btn
const enableBtns = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = '';
        box.style.backgroundColor = '#ffc300';
    })
}

// Function to reset game
const resetGame = () => {
    turnO = true;
    enableBtns();
    msgCont.classList.add('hidden');
}

// Code for new/reset game
newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);