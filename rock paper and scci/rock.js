function  getComputerChoice(){  
let choice = Math.floor(Math.random() * 3);
if(choice === 0) return "rock";
else if (choice === 1) return "paper";
return "scissors";
}
function getUserChoice(){  
let choice;
while(true) {  

choice = prompt("Enter your Move:");
choice = choice.toLocaleLowerCase();
choice = choice.trim();
if (choice === "rock " || choice === "paper" || choice === "scissors"){  

    return choice;
}
  alert("Invalid Choice.Enter agian");
}



}


function playRound(computerChoice,userChoice){  
if(computerChoice === userChoice) return " tie";
else if(computerChoice === "rock" && userChoice === " paper")return "user";
else if (computerChoice === " paper" && userChoice === "scissors") return " computer";
else if (computerChoice === "paper " && userChoice === "rock") return "computer";
else if(computerChoice === "scissors " && userChoice === " scissors") return " user"
else if ( computerChoice === " scissors" && userChoice === "rock") return " user";
else return "computer";


}

function playGame(){  

let wins = 0;
for(let i = 5 ; i> 0;i--){  

    console.log(`${i} rounds remain`);
let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
let winner = playRound(computerChoice,userChoice);
if(winner!=="tie") console.log(`${winner} won`);
else console.log ("It's a tie");
if(winner === "user") wins++


}

return wins;
while(true) 
{  
let wins = playGame();
alet (`You won $(wins) times out of 5!`);
let ans = confirm("play another round?");
if(ans === false) break;
console.clear();
}









}
