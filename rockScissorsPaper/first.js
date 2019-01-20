let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const score_board_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result > p");
const r_div = document.getElementById("r");
const s_div = document.getElementById("s");
const p_div = document.getElementById("p");
const button_new_game = document.getElementById("new");

function computerChoose(){
    const choices = ["r", "s", "p"];
    return choices[Math.floor(3 * Math.random())];
}

function ltoS(letter){
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scissors";
    return "Paper";
}

function lose(userChoice, compChoice){
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${ltoS(userChoice)} beaten by ${ltoS(compChoice)}... You Lost... 💩`;
}

function win(userChoice, compChoice){
    userScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${ltoS(userChoice)}  beats ${ltoS(compChoice)}! You Win! 😎`;
}

function draw(userChoice, compChoice){
    result_div.innerHTML = `${ltoS(userChoice)}  same as ${ltoS(compChoice)}, DRAW 🤪`;
}

function game(userChoice){
    const computerChoice = computerChoose();

    switch(userChoice+computerChoice){
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function startNewGame(){
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "";
}

r_div.addEventListener("click", function(){
    game("r");
})

s_div.addEventListener("click", function(){
    game("s");
})

p_div.addEventListener("click", function(){
    game("p");
})

button_new_game.addEventListener("click", function(){
    startNewGame();
})