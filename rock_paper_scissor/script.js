function getComputerChoice(){
    const rng = Math.ceil(Math.random() * 3);
    if(rng === 1){
        return `rock`
    }
    else if(rng === 2){
        return `paper`
    }
    else if(rng === 3){
        return `scissor`
    }
}



function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return `Draw`;
    }
    else if(playerSelection == `rock` && computerSelection == `paper`){
        return `Computer wins`
    }
    else if(playerSelection == `rock` && computerSelection == `scissor`){
        return `Player wins`
    }
    else if(playerSelection == `paper` && computerSelection == `rock`){
        return `Player wins`
    }
    else if(playerSelection == `paper` && computerSelection == `scissor`){
        return `Computer wins`
    }
    else if(playerSelection == `scissor` && computerSelection == `paper`){
        return `Player wins`
    }
    else if(playerSelection == `scissor` && computerSelection == `rock`){
        return `Computer wins`
    }    
    else {
        alert(`Not valid input`);
        return;
    }
}

let counter = 0;
let playerWin = 0;
let computerWins = 0;

function updateWinner(playRound){
    if(playRound ===`Player wins`) playerWin++;
    else if(playRound === `Computer wins`) computerWins ++;
}

const rock = document.querySelector('#btnRock');
const result = document.querySelector('#result');
result.textContent = `Result: `;

const finalResult = document.querySelector('#finalResult');
finalResult.textContent = `Final Result: `;

function updateFinal(){
    if(playerWin > computerWins){
        finalResult.textContent += `Final Winner is Player with ${playerWin} out of 5`;
    }
    else if(playerWin < computerWins){
        finalResult.textContent += `Final Winner is computer with ${computerWins} out of 5`;
    }
    else if(playerWin === computerWins){
        finalResult.textContent += `Final Result is a Draw with ${computerWins} wins for Computer and ${playerWin} for Player`;

    }
    
    playerWin = 0;
    computerWins = 0;
    counter = 0;
}
function chooseRock(e){    
    if(counter === 5){
        updateFinal();
    }
    else{
        finalResult.textContent = `Final Result: `;
        result.textContent = `Result: `;
        const playerSelection = `rock`;
        const computerSelection = getComputerChoice();    
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection} \t ${playRound(playerSelection, computerSelection)}`);
        result.textContent += `${playRound(playerSelection, computerSelection)}`;
        updateWinner(playRound(playerSelection, computerSelection));
        counter++;
    }
    
}
    
rock.addEventListener('click', chooseRock);

const paper = document.querySelector('#btnPaper');
function choosePaper(e){
    if(counter === 5){
        updateFinal();
    }
    //else {
        finalResult.textContent = `Final Result: `;
        result.textContent = `Result: `;
        const playerSelection = `paper`;
        const computerSelection = getComputerChoice();
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection} \t ${playRound(playerSelection, computerSelection)}`);
        result.textContent += `${playRound(playerSelection, computerSelection)}`;
        updateWinner(playRound(playerSelection, computerSelection));
        counter++;
   // }
    
}
paper.addEventListener('click', choosePaper);

const scissor = document.querySelector('#btnScissor');
function chooseScissor(e){
    if(counter === 5){
        updateFinal();
    }
    else {
        finalResult.textContent = `Final Result: `;
        result.textContent = `Result: `;
        const playerSelection = `scissor`;
        const computerSelection = getComputerChoice();
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection} \t ${playRound(playerSelection, computerSelection)}`);
        result.textContent += `${playRound(playerSelection, computerSelection)}`;
        updateWinner(playRound(playerSelection, computerSelection));
        counter++;
    }
    
}
scissor.addEventListener('click', chooseScissor);


// function game(){
//     let winCounter = 0; //keep track of player wins
//     let loseCounter = 0; //keep track of computer wins
//     for(i = 0; i< 5; i++){       
//         //convert both computer choice and player choice for eacsy comparison 
//         const computerSelection = getComputerChoice().toLowerCase();
//         const playerSelection = prompt(`Enter your choice: `).toLowerCase();
//         const roundResult = playRound(playerSelection, computerSelection);//storing the return value of playRound in a variable to have safer access.

//         if(roundResult === undefined){
//             return;//ensures the entire program exits 
//         }
//         else if(roundResult === `Player wins`){
//             winCounter ++;
//         }
//         else if(roundResult === `Computer wins`){
//             loseCounter ++;
//         }
//         console.log(roundResult);//print output every loop
//     }
//     //the three conditions covers all cases
//     if(winCounter > loseCounter ){
//         console.log(`Player is the Final Winner`);
//     }
//     else if(loseCounter > winCounter){
//         console.log(`Computer is the Final Winner`);
//     }
//     else console.log(`Final result is a Draw`);
// }