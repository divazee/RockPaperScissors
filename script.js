var p1Name;
var p2Name;

var rock = "Rock";
var paper = "Paper";
var scissors = "Scissors";



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
    var p1Answer = prompt("Hey! " + p1Name.toUpperCase() + ", your turn");
    var p2Answer = prompt("Hi! " + p2Name.toUpperCase() + ", your turn");


    //var p1Answer = player1.toLowerCase();

    if (p1Answer.toLowerCase() == p2Answer.toLowerCase()) {
        alert("Draw...");
    } else if (p1Answer.toLowerCase() == rock.toLowerCase() && p2Answer.toLowerCase() == scissors.toLowerCase()) {
        alert(p1Name + " Wins!!!")
    } else if (p1Answer.toLowerCase() == rock.toLowerCase() && p2Answer.toLowerCase() == paper.toLowerCase()) {
        alert(p2Name + " Wins!!!")
    } else if (p1Answer.toLowerCase() == paper.toLowerCase() && p2Answer.toLowerCase() == scissors.toLowerCase()) {
        alert(p2Name + " Wins!!!")
    } else if (p1Answer.toLowerCase() == paper.toLowerCase() && p2Answer.toLowerCase() == rock.toLowerCase()) {
        alert(p1Name + " Wins!!!")
    } else if (p1Answer.toLowerCase() == scissors.toLowerCase() && p2Answer.toLowerCase() == rock.toLowerCase()) {
        alert(p2Name + " Wins!!!")
    } else if (p1Answer.toLowerCase() == scissors.toLowerCase() && p2Answer.toLowerCase() == paper.toLowerCase()) {
        alert(p1Name + " Wins!!!")
    } else {
        alert("Choose Rock, Paper or Scissors");
    }
    playAgain();
}
playGame();


function playAgain() {
    var answer = prompt("Do you wanna try me again? (Y/N)")
    var reply = ["Y", "y", "yes", "Yes", "yeah", "Yeah"]
    
    //if (answer !== "Y") {
        if (reply.includes(answer)) {
            playGame();
    } else {
        alert("GAME OVER!!!");
    }
}




