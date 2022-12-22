const diceUser = ["<img src='img/dice1.png'>","<img src='img/dice2.png'>","<img src='img/dice3.png'>","<img src='img/dice4.png'>","<img src='img/dice5.png'>","<img src='img/dice6.png'>"];

const diceComputer = ["<img src='img/dice1.png'>","<img src='img/dice2.png'>","<img src='img/dice3.png'>","<img src='img/dice4.png'>","<img src='img/dice5.png'>","<img src='img/dice6.png'>"];

const userDiceShow = document.getElementById("user-dice");
const computerDiceShow = document.getElementById("computer-dice");
const start = document.querySelector(".start");
const showResult = document.getElementById("result");

start.addEventListener ('click',

    function game() {
        const posDiceUser = Math.floor(Math.random() * diceUser.length);
        let diceUserRandomized = diceUser[posDiceUser];
        userDiceShow.innerHTML = diceUserRandomized;
        
        const posDiceComputer = Math.floor(Math.random() * diceComputer.length);
        let diceComputerRandomized = diceComputer[posDiceComputer]
        computerDiceShow.innerHTML = diceComputerRandomized;

        if (diceUserRandomized == diceComputerRandomized) {
            showResult.innerHTML = "Tie";
        }
        else if(diceUserRandomized > diceComputerRandomized){
            showResult.innerHTML = "User Wins";
        }
        else {
            showResult.innerHTML = "Computer Wins";

        }
    }

)
