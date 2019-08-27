var p1Name;
var p2Name;


function askName() {
    p1Name = prompt("Player 1 Name:");
    check(p1Name);

    p2Name = prompt("Player 2 Name:");
    check(p2Name);
}
askName();

function check(p1Name) {
    if (p1Name == "") {
        alert("Say your name");
        askName();
    }
}


function check(p2Name) {
    if (p2Name == "") {
        alert("Say your name");
        askName();
    }
}

// if (p1Name == " " && p2Name == " ") {
//     alert("say your name");
// }


function playGame() {
    var player1 = prompt("Hey! " + p1Name + ", your turn");
    var player2 = prompt("Hi! " + p2Name + ", your turn");

    if (player1 == player2) {
        alert("Draw...");
    } else if (player1 == "rock" && player2 == "scissors") {
        alert(p1Name + " Wins!!!")
    } else if (player1 == "rock" && player2 == "paper") {
        alert(p2Name + " Wins!!!")
    } else if (player1 == "paper" && player2 == "scissors") {
        alert(p2Name + " Wins!!!")
    } else if (player1 == "paper" && player2 == "rock") {
        alert(p1Name + " Wins!!!")
    } else if (player1 == "scissors" && player2 == "rock") {
        alert(p2Name + " Wins!!!")
    } else if (player1 == "scissors" && player2 == "paper") {
        alert(p1Name + " Wins!!!")
    } else {
        alert("Choose Rock, Paper or Scissors");
    }
    playAgain();
}
playGame();


function playAgain() {
    var answer = prompt("do you wanna try me again? (Y/N)")
    if (answer !== "Y") {
        alert("GAME OVER!!!")
    } else {
        playGame();
    }
}




