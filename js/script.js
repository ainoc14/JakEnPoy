let yourScore = document.querySelector("#yourScore");
yourScore.textContent = 0;
let enemyScore = document.querySelector("#enemyScore");
enemyScore.textContent = 0;
let roundResult = document.querySelector("#roundResult");

let rockPlayer = document.querySelector("#rockPlayer");
let paperPlayer = document.querySelector("#paperPlayer");
let scissorsPlayer = document.querySelector("#scissorsPlayer");

let rockComputer = document.querySelector("#rockComputer");
let paperComputer = document.querySelector("#paperComputer");
let scissorsComputer = document.querySelector("#scissorsComputer");

let playerPick = document.querySelector("#playerPick");
let computerPick = document.querySelector("#computerPick");

let matchHistory = document.querySelector("#matchHistory");

let rock = 1;
let paper = 2;
let scissors = 3;

let buttonDiv = document.querySelector("#buttonDiv");
let resetBtn = document.querySelector("#resetButton");

resetBtn.addEventListener("click", resetGame);

function resetGame(){
    location.reload();
}

rockPlayer.addEventListener("click", pickRock);

function pickRock(){
    let enemyPick = Math.ceil(Math.random()*3);
    playerPick.removeChild(playerPick.lastChild);
    playerPick.insertAdjacentHTML("beforeend", "<img src='images/rock.svg' class='rock'>");
    rockPlayer.style.backgroundColor = "black";
    paperPlayer.style.backgroundColor = "";
    scissorsPlayer.style.backgroundColor = "";
    
    if (enemyPick === rock){
        roundResult.textContent = "This round is a tie !";
        roundResult.style.color = "blue";
        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='tie'>You picked Rock and Computer picked Rock. Its a tie!</h5>");
        computerPick.removeChild(computerPick.lastChild);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/rock.png' class='rock'>");
        rockComputer.style.backgroundColor = "black";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === paper){
        enemyScore.textContent++;
        roundResult.textContent = "You lose this round !";
        roundResult.style.color = "red";
        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='lose'>You picked Rock and Computer picked Paper. You lose !</h5>");
        computerPick.removeChild(computerPick.lastChild);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/paper.png' class='paper'>");
        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "black";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === scissors){
        yourScore.textContent++;
        roundResult.textContent = "You win this round !";
        roundResult.style.color = "lightgreen";
        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='win'>You picked Rock and Computer picked scissors. You win !</h5>");
        computerPick.removeChild(computerPick.lastChild);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/scissors.png' class='scissors'>");
        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "black";
    }

    if(yourScore.textContent == 7){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");
        roundResult.textContent = "You win the game !";

    } else if (enemyScore.textContent == 7){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");
        roundResult.textContent = "Computer wins the game !";
    }
}

paperPlayer.addEventListener("click", pickPaper)

function pickPaper(){
    let enemyPick = Math.ceil(Math.random()*3);
    playerPick.removeChild(playerPick.lastChild)
    playerPick.insertAdjacentHTML("beforeend", "<img src='images/paper.svg' class='paper'>")
    rockPlayer.style.backgroundColor = "";
    paperPlayer.style.backgroundColor = "black";
    scissorsPlayer.style.backgroundColor = "";

    if (enemyPick === rock){
        yourScore.textContent++;
        roundResult.textContent = "You win this round !";
        roundResult.style.color = "lightgreen";
        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='win'>You picked Paper and Computer picked Rock. You win !</h5>");
        computerPick.removeChild(computerPick.lastChild);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/rock.png' class='rock'>");
        rockComputer.style.backgroundColor = "black";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === paper){
        roundResult.textContent = "This round is a tie !";
        roundResult.style.color = "blue";
        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='tie'>You picked Paper and Computer picked Paper. Its a tie !</h5>");
        computerPick.removeChild(computerPick.lastChild);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/paper.png' class='paper'>");
        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "black";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === scissors){
        enemyScore.textContent++;
        roundResult.textContent = "You lose this round !";
        roundResult.style.color = "red";
        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='lose'>You picked Paper and Computer picked scissors. You lose !</h5>");
        computerPick.removeChild(computerPick.lastChild);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/scissors.png' class='scissors'>");
        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "black";
    }

    if(yourScore.textContent == 7){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");
        roundResult.textContent = "You win the game !";
    
    } else if (enemyScore.textContent == 7){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");
        roundResult.textContent = "Computer wins the game !";
    }
  
}

scissorsPlayer.addEventListener("click", pickscissors)

function pickscissors(){
    let enemyPick = Math.ceil(Math.random()*3);
    playerPick.removeChild(playerPick.lastChild);
    playerPick.insertAdjacentHTML("beforeend", "<img src='images/scissors.svg' class='scissors'>")
    rockPlayer.style.backgroundColor = "";
    paperPlayer.style.backgroundColor = "";
    scissorsPlayer.style.backgroundColor = "black";

    if (enemyPick === rock){
        enemyScore.textContent++;
        roundResult.textContent = "You lose this round !";
        roundResult.style.color = "red";
        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='lose'>You picked scissors and Computer picked Rock. You lose !</h5>");
        computerPick.removeChild(computerPick.lastChild);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/rock.png' class='rock'>");
        rockComputer.style.backgroundColor = "black";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === paper){
        yourScore.textContent++;
        roundResult.textContent = "You win this round !";
        roundResult.style.color = "lightgreen";
        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='win'>You picked scissors and Computer picked Paper. You win !</h5>");
        computerPick.removeChild(computerPick.lastChild);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/paper.png' class='paper'>");
        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "black";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === scissors){
        roundResult.textContent = "This round is a tie !";
        roundResult.style.color = "blue";
        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='tie'>You picked scissors and Computer picked scissors. Its a tie !</h5>");
        computerPick.removeChild(computerPick.lastChild);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/scissors.png' class='scissors'>");
        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "black";
    }
 
    if(yourScore.textContent == 7){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");
        roundResult.textContent = "You win the game !";
    
    } else if (enemyScore.textContent == 7){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");
        roundResult.textContent = "Computer wins the game !";
    }
}









