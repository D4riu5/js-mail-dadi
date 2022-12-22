const diceUser = [1,2,3,4,5,6];
let diceUserRandomized = Math.floor(Math.random()*diceUser.length + 1);

console.log("User dice number is " + diceUserRandomized);

const diceComputer = [1,2,3,4,5,6];
let diceComputerRandomized = Math.floor(Math.random()*diceComputer.length + 1);

console.log("Computer dice number is " + diceComputerRandomized );

if (diceUserRandomized == diceComputerRandomized) {
    console.log("User and Computer tied!");
}
else if(diceUserRandomized > diceComputerRandomized){
    console.log("User won!");
}
else {
    console.log("Computer won!");
}