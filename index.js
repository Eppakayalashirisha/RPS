var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user_score");
var computerScore_span = document.getElementById("computer_score");
var scoreBoard = document.querySelector(".score_board");
var result = document.querySelector(".result >p")
var rock = document.getElementById("r");
var paper = document.getElementById("p");
var scissor = document.getElementById("s");

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissor"
}

function wins(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(3).sub()
    const smallComp = "comp".fontsize(3).sub()
    result.innerHTML = `${convert(user)}${smallUser} beats ${convert(computer)}${smallComp} .  you wins! `
    document.getElementById(user).classList.add("green-glow")
    setTimeout(() => document.getElementById(user).classList.remove("green-glow"), 500)
}

function lost(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUser = "user".fontsize(3).sub()
    const smallComp = "comp".fontsize(3).sub()
    result.innerHTML = `${convert(user)}${smallUser} lose on  ${convert(computer)}${smallComp} .  you lost! `
    document.getElementById(user).classList.add("red-glow");
    setTimeout(() => document.getElementById(user).classList.remove("red-glow"), 500)
}

function draw(user, computer) {

    const smallUser = "user".fontsize(3).sub()
    const smallComp = "comp".fontsize(3).sub()
    result.innerHTML = `${convert(user)}${smallUser} equals ${convert(computer)}${smallComp} .   Draw! `
    document.getElementById(user).classList.add("grey-glow");
    setTimeout(() => document.getElementById(user).classList.remove("grey-glow"), 500)
}


function getComputerChoice() {
    const choice = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber]
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "sp":
        case "rs":
            wins(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lost(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}


function main() {
    rock.addEventListener('click', () => game("r"));
    paper.addEventListener('click', () => game("p"));
    scissor.addEventListener('click', () => game("s"));
}

main()