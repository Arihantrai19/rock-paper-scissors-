function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1;
    if(num === 1){
        return "rock";
    }else if (num === 2){
        return "paper";
    }else{
        return "scissor";
    }
}

let human_score = 0;
let computer_score = 0;

function playround(my_choice, computer_choice){
    if(my_choice === 1){
        if(computer_choice === "rock"){
            return "It's a tie";
        }else if(computer_choice === "paper"){
            computer_score++;
            return "You lose";
        }else{
            human_score++;
            return "You win";
        }
    }else if(my_choice === 2){
        if(computer_choice === "rock"){
            human_score++;
            return "You win";
        }else if(computer_choice === "paper"){
            return "It's a tie";
        }else{
            computer_score++;
            return "You lose";
        }
    }else if(my_choice === 3){
        if(computer_choice === "rock"){
            computer_score++;
            return "You lose";
        }else if(computer_choice === "paper"){
            human_score++;
            return "You win";
        }else{
            return "It's a tie";
        }
    }
}

for(let i = 0; i < 5; i++){
    let my_choice = parseInt(prompt("Enter your choice: 1 for rock, 2 for paper, 3 for scissor"));
    let computer_choice = getComputerChoice();
    console.log("Human choice: " + my_choice);
    console.log("Computer choice: " + computer_choice);
    console.log(playround(my_choice, computer_choice));
}

console.log("Human score: " + human_score);
console.log("Computer score: " + computer_score);